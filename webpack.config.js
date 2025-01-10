// eslint-disable-next-line
const path = require("path");
// eslint-disable-next-line
const nodeExternals = require("webpack-node-externals");
// eslint-disable-next-line
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/server/index.tsx",
  target: "node",
  mode: "development", // Change to 'production' for production builds
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/public", to: "public" }],
    }),
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
};
