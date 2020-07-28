import codegen from "babel-plugin-codegen/macro";

const fn = codegen`
const { IconsManifest } = require("@meronex/icons/lib/cjs");

let codes = "(function (id) { switch (id) {";
IconsManifest.forEach(icon => {
  codes += 'case "' + icon.id + '":\\nreturn import("@meronex/icons/' + icon.id +'/index");\\n'
})
codes += '}})';

module.exports = codes;
// module.exports = "import('react-icons/fa/index')"
`;

export async function getIcons(iconsId) {
  /*
  Dynamic Import with improved performance.
  Macros are used to avoid bundling unnecessary modules.

  Similar to this code
  ```
  return import(`react-icons/${iconsId}/index`);
  ```
  */
  const result = await fn(iconsId);
  console.log(result);
  return result;
}
