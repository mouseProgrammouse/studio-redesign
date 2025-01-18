// eslint-disable-next-line
const path = require("path");
// eslint-disable-next-line
const nodeExternals = require("webpack-node-externals");
// eslint-disable-next-line
const CopyPlugin = require("copy-webpack-plugin");
// eslint-disable-next-line
const Dotenv = require("dotenv-webpack");

// Shared settings can be placed here, if needed
const commonResolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  alias: {
    "@components": path.resolve(__dirname, "src/components/"),
  },
};

module.exports = [
  {
    name: "server",
    entry: "./src/server/index.tsx",
    target: "node",
    externals: [nodeExternals()],
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
        patterns: [
          { from: "src/public", to: "public" },
          { from: "src/locales", to: "locales" },
        ],
      }),
    ],
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
      ],
    },
    plugins: [new Dotenv()],
    devtool: "source-map",
  },
];
