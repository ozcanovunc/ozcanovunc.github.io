require("cross-fetch/polyfill");

const copyPublicAssets = require("./copy-public-assets");

async function build() {
  await copyPublicAssets();
}

build();
