const path = require("path");

module.exports = {
  entry: "./src/app.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
  },
  devServer: {
    static: { directory: path.resolve(__dirname) },
    client: {
      overlay: false,
    },
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
