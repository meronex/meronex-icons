const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const path = require("path");

module.exports = withCSS(
  withSass({
      experimental: {
        publicDirectory: true
      },
      webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on fs module, see github.com/zeit/next.js/issues/7755
        if (!isServer) {
          config.node = { fs: "empty", module: "empty" };
        }
        config.resolve.alias["@components"] = path.join(
          __dirname,
          `src/components`
        );
        config.resolve.alias["@pages"] = path.join(__dirname, `src/pages`);
        config.resolve.alias["@styles"] = path.join(__dirname, `src/styles`);
        config.resolve.alias["@utils"] = path.join(__dirname, `src/utils`);
        config.module.rules.push(
              {
                  test: /\.md$/,
                  use: 'raw-loader'
              }
          )
        return config;
      },
      assetPrefix: process.env.BASE_PATH || "",
      publicRuntimeConfig: {
        basePath: process.env.BASE_PATH || ""
      }
    })
);
