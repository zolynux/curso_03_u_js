const path = require("path");

module.exports = {
  entry: path.join(__dirname, "./modulos.ts"),
  output: {
    filename: "modulos.js",
    path: __dirname,
  },
  modules: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "./node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
