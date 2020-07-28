const cheerio = require("cheerio");
const glob = require("glob-promise");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const camelcase = require("camelcase");
const findPackage = require("find-package");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const { icons } = require("../src/icons");

// file path
const rootDir = path.resolve(__dirname, "../");
const DIST = path.resolve(rootDir, ".");
const LIB = path.resolve(rootDir, "./lib");

// logic

async function getIconFiles(content) {
  return glob(content.files);
}
async function convertIconData(svg, multiColor) {
  const $svg = cheerio.load(svg, { xmlMode: true })("svg");

  // Convert SVG inline style attribute into an object for React consumption:
  // e.g. style="fill: none;stroke: #00007f;stroke-linejoin: round" gets converted
  // into  "style": {"fill": " none","stroke": " #00007f","strokeLinejoin": " round"}
  const cssToObj = /** @type string */ css => {
    try {
      const result = {};

      const cssAttributes = css.split(";");

      for (const attr of cssAttributes) {
        const pair = attr.split(":");

        result[camelcase(pair[0])] = pair[1];
      }

      return result;
    } catch (e) {
      console.error(e);

      return null;
    }
  };

  // filter/convert attributes
  // 1. convert "class" attr to "className" for use with React JSX
  // 2. convert to camelcase ex: fill-opacity => fillOpacity
  const attrConverter = (
      /** @type {{[key: string]: string}} */ attribs,
      /** @type string */ tagName
  ) =>
      attribs &&
      Object.keys(attribs)
          .filter(
              name =>
                  !(
                      [
                        ...(tagName === "svg"
                            ? ["xmlns", "xmlns:xlink", "xml:space", "width", "height"]
                            : []) // if tagName is svg remove size attributes
                      ].includes(name) || name === "data-name"
                  ) // React doesn't like "data-name" (dataName) attribute in Predix icons
          )
          .reduce((obj, name) => {
            const newName = camelcase(name);
            switch (newName) {
              case "fill":
                  obj[newName] = attribs[name];
                break;
              case "pId":
                // React does not recognize the `pId` prop on a DOM element
                break;
              case "class": // internal CSS
                obj["className"] = attribs[name];
                break;
              case "style": // inline style
                obj["style"] = cssToObj(attribs[name]);
                break;
              default:
                obj[newName] = attribs[name];
                break;
            }
            return obj;
          }, {});

  // convert to [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
  const elementToTree = (/** @type {Cheerio} */ element) =>
      element
          .filter((_, e) => e.tagName)
          .map((_, e) => {
            const childTags = [];
            let textContent;

            // Separate the text content child from all other children
            for (const child of e.children) {
              if (child.type === "text") {
                textContent = child.data;
              } else {
                childTags.push(child);
              }
            }

            return {
              tag: e.tagName,
              attr: attrConverter(e.attribs, e.tagName),
              child: childTags.length
                  ? elementToTree(cheerio(childTags))
                  : undefined,
              content: textContent
            };
          })
          .get();

  const tree = elementToTree($svg);
  return tree[0]; // like: [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
}

function generateIconRow(icon, formattedName, iconData, type = "module") {
  switch (type) {
    case "module":
      return (
        `import ${formattedName} from './${formattedName}';\n`+
        `${formattedName}.displayName = "${formattedName}";\n`+
          `${formattedName}.iconSet = "${icon.id}";\n` +
        `export { ${formattedName} };\n\n`
      );
    case "common":
      return (
        `var ${formattedName} = require('./${formattedName}');\n`+
        `${formattedName}.displayName = "${formattedName}";\n` +
        `${formattedName}.iconSet = "${icon.id}";\n` +
        `module.exports.${formattedName} = ${formattedName};\n\n`
      );
    case "dts":
      return `export declare const ${formattedName}: IconType;\n`;
  }
}
function generateIconsEntry(iconId, type = "module") {
  switch (type) {
    case "module":
      return `export * from './${iconId}';\n`;
    case "dts":
      return `export * from './${iconId}';\n`;
  }
}

async function dirInit() {
  const ignore = err => {
    if (err.code === "EEXIST") return;
    throw err;
  };

  const mkdir = promisify(fs.mkdir);
  const writeFile = promisify(fs.writeFile);

  await mkdir(DIST).catch(ignore);
  await mkdir(LIB).catch(ignore);
  await mkdir(path.resolve(LIB, "esm")).catch(ignore);
  await mkdir(path.resolve(LIB, "cjs")).catch(ignore);

  const write = (filePath, str) =>
    writeFile(path.resolve(DIST, ...filePath), str, "utf8").catch(ignore);

  const initFiles = [
    "index.d.ts",
    "index.esm.js",
    "index.js",
    "all.js",
    "all.d.ts"
  ];

  const gitignore =
    [
      "# autogenerated",
      ...initFiles.map(s => `/${s}`),
      ...icons.map(icon => `/${icon.id}/`)
    ].join("\n") + "\nREADME.md\n\n";
  writeFile(path.resolve(DIST, ".gitignore"), gitignore);

  for (const icon of icons) {
    await mkdir(path.resolve(DIST, icon.id)).catch(ignore);

    await write(
      [icon.id, "index.js"],
      "// THIS FILE IS AUTO GENERATED\n"
    );
    await write(
      [icon.id, "index.esm.js"],
      "// THIS FILE IS AUTO GENERATED\n"
    );
    await write(
      [icon.id, "index.d.ts"],
      "import { IconTree, IconType } from '../lib'\n// THIS FILE IS AUTO GENERATED\n"
    );
    await write(
      [icon.id, "package.json"],
      JSON.stringify(
        {
          sideEffects: false,
          module: "./index.esm.js"
        },
        null,
        2
      ) + "\n"
    );
  }

  for (const file of initFiles) {
    await write([file], "// THIS FILE IS AUTO GENERATED\n");
  }
}

async function generateIconFile(icon, name, iconData) {
  const ignore = err => {
    if (err.code === "EEXIST") return;
    throw err;
  };
  const writeFile = promisify(fs.writeFile);

  const write = (filePath, str) =>
    writeFile(path.resolve(DIST, ...filePath), str, "utf8").catch(ignore);

  const getFileContent = ()=> {
      return (
          `var GenIcon = require('../lib').GenIcon\n\nmodule.exports = function (props) {\n` +
          `   return GenIcon(${JSON.stringify(iconData)})(props);\n` +
          `};\n`
      );
  }
  await write([icon.id, `${name}.js`], getFileContent());
}
async function writeIconModule(icon) {
  const appendFile = promisify(fs.appendFile);
  const exists = new Set(); // for remove duplicate
  for (const content of icon.contents) {
    const files = await getIconFiles(content);

    const entryModule = generateIconsEntry(icon.id, "module");
    await appendFile(path.resolve(DIST, "all.js"), entryModule, "utf8");
    const entryDts = generateIconsEntry(icon.id, "dts");
    await appendFile(path.resolve(DIST, "all.d.ts"), entryDts, "utf8");

    for (const file of files) {
      const svgStr = await promisify(fs.readFile)(file, "utf8");
      const iconData = await convertIconData(svgStr, content.multiColor);

      const rawName = path.basename(file, path.extname(file));
      const pascalName = camelcase(rawName, { pascalCase: true });
      const name =
        (content.formatter && content.formatter(pascalName)) || pascalName;
      if (exists.has(name)) continue;
      exists.add(name);

      await generateIconFile(icon, name, iconData);

      // write like: module/fa/index.esm.js
      const modRes = generateIconRow(icon, name, iconData, "module");
      await appendFile(
        path.resolve(DIST, icon.id, "index.esm.js"),
        modRes,
        "utf8"
      );
      const comRes = generateIconRow(icon, name, iconData, "common");
      await appendFile(path.resolve(DIST, icon.id, "index.js"), comRes, "utf8");
      const dtsRes = generateIconRow(icon, name, iconData, "dts");
      await appendFile(
        path.resolve(DIST, icon.id, "index.d.ts"),
        dtsRes,
        "utf8"
      );

      exists.add(file);
    }
  }
}

async function writeIconsManifest() {
  const writeFile = promisify(fs.writeFile);
  const copyFile = promisify(fs.copyFile);

  const writeObj = icons.map(icon => ({
    id: icon.id,
    name: icon.name,
    projectUrl: icon.projectUrl,
    license: icon.license,
    licenseUrl: icon.licenseUrl
  }));
  const manifest = JSON.stringify(writeObj, null, 2);
  await writeFile(
    path.resolve(LIB, "esm", "iconsManifest.js"),
    `export var IconsManifest = ${manifest}`,
    "utf8"
  );
  await writeFile(
    path.resolve(LIB, "cjs", "iconsManifest.js"),
    `module.exports.IconsManifest = ${manifest}`,
    "utf8"
  );
  await copyFile(
    "src/iconsManifest.d.ts",
    path.resolve(LIB, "esm", "iconsManifest.d.ts")
  );
  await copyFile(
    "src/iconsManifest.d.ts",
    path.resolve(LIB, "cjs", "iconsManifest.d.ts")
  );
  await copyFile("src/package.json", path.resolve(LIB, "package.json"));
}

async function writeLicense() {
  const copyFile = promisify(fs.copyFile);
  const appendFile = promisify(fs.appendFile);

  const iconLicenses =
    icons
      .map(icon =>
        [
          `${icon.name} - ${icon.projectUrl}`,
          `License: ${icon.license} ${icon.licenseUrl}`
        ].join("\n")
      )
      .join("\n\n") + "\n";

  await copyFile(
    path.resolve(rootDir, "LICENSE_HEADER"),
    path.resolve(rootDir, "LICENSE")
  );
  await appendFile(path.resolve(rootDir, "LICENSE"), iconLicenses, "utf8");
}

async function writeEntryPoints() {
  const appendFile = promisify(fs.appendFile);
  const generateEntryCjs = function() {
    return `module.exports = require('./lib/cjs/index.js');`;
  };
  const generateEntryMjs = function(filename = "index.js") {
    return `import * as m from './lib/esm/${filename}'
export default m
    `;
  };
  await appendFile(path.resolve(DIST, "index.js"), generateEntryCjs(), "utf8");
  await appendFile(
    path.resolve(DIST, "index.esm.js"),
    generateEntryMjs(),
    "utf8"
  );
  await appendFile(
    path.resolve(DIST, "index.d.ts"),
    generateEntryMjs("index.d.ts"),
    "utf8"
  );
}

async function writeIconVersions() {
  const versions = [];

  // searching for icon versions from package.json and git describe command
  for (const icon of icons) {
    const files = (
      await Promise.all(icon.contents.map(content => getIconFiles(content)))
    ).flat();

    const firstDir = path.dirname(files[0]);
    const packageJson = findPackage(firstDir, true);

    let gitVersion;
    if (!packageJson.version) {
      const { stdout } = await exec(
        `cd ${firstDir} && git describe --tags || cd ${firstDir} && git rev-parse HEAD`
      );
      gitVersion = stdout.trim();
      console.log("stdout", icon.id, stdout);
    }

    versions.push({
      icon,
      version: packageJson.version || gitVersion
    });
  }

  const versionsStr =
    "Icon Library|License|Version\n" +
    "---|---|---\n" +
    versions
      .map(v =>
        [
          `[${v.icon.name}](${v.icon.projectUrl})`,
          `[${v.icon.license}](${v.icon.licenseUrl})`,
          v.version
        ].join("|")
      )
      .join("\n") +
    "\n";

  await fs.promises.writeFile(
    path.resolve(rootDir, "VERSIONS"),
    versionsStr,
    "utf8"
  );
}

async function pushToPreview() {
  const ncp = require("ncp").ncp;

  for (const icon of icons) {
    const sourceDir = path.join(__dirname, "..", icon.id);
    const targetDir = path.join(
        "../node_modules/@meronex/icons",
        icon.id
    );

    await ncp(sourceDir, targetDir);

    console.log(`pushed ${sourceDir} to ${targetDir}`);
  }
}

async function main() {

  console.log(process.env);

  try {
    await dirInit();
    await writeIconVersions();
    await writeEntryPoints();
    await writeLicense();
    await writeIconsManifest();
    for (const icon of icons) {
      await writeIconModule(icon);
    }
    console.log("done");
  } catch (e) {
    console.error(e);
  }
}
main();
