const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: path.resolve(__dirname, "dist"),
};
