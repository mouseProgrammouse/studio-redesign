// eslint-disable-next-line
const path = require("path");
// eslint-disable-next-line
const nodeExternals = require("webpack-node-externals");
// eslint-disable-next-line
const CopyPlugin = require("copy-webpack-plugin");

// Shared settings can be placed here, if needed
const commonResolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
};

module.exports = [
  {
    name: "server",
    entry: "./src/server/index.tsx",
    target: "node",
    mode: "development", // Change to 'production' for production builds
    externals: [nodeExternals({ allowlist: ["siper"] })],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "server.js",
    },
    resolve: commonResolve,
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
  },
  {
    name: "client",
    entry: "./src/client/index.tsx",
    target: "web",
    mode: "development", // Use 'production' for production builds
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "src/public"),
      publicPath: "/",
    },
    resolve: commonResolve,
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/, // Add rule for CSS files
          use: ["style-loader", "css-loader"], // Process CSS with style-loader and css-loader
        },
      ],
    },
    plugins: [],
    devtool: "source-map",
  },
];
