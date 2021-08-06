const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./lib/index.tsx",
  },
  // 输出的格式为一个 library
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    library: {
      name: "Eui",
      type: "umd",
    },
  },
};
