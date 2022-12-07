const fs = require("fs-extra");
const concat = require("concat");

const build = async () => {
  const files = [
    "./dist/video-player-wc/runtime.js",
    "./dist/video-player-wc/polyfills-es5.js",
    "./dist/video-player-wc/polyfills.js",
    "./dist/video-player-wc/scripts.js",
    "./dist/video-player-wc/vendor.js",
    "./dist/video-player-wc/main.js",
  ];

  await fs.ensureDir("dist/video-player-wc");
  await concat(files, "web-component/sunbird-video-player.js");
  await fs.copy("./dist/video-player-wc/assets", "web-component/assets");
  await fs.copy("./dist/video-player-wc/styles.css", "web-component/styles.css")
  console.log("Files concatenated successfully!!!");
};
build();
