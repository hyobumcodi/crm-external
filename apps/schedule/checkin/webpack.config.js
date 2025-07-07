const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3004/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3004,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new Dotenv({ path: "../../../.env" }),
    new ModuleFederationPlugin({
      name: "schedule_checkin",
      filename: "remoteEntry.js",
      remotes: {
        fragment_error_connections:
          "fragment_error_connections@http://localhost:5001/remoteEntry.js",
      },
      exposes: {
        "./injector": "./src/injector.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "@packages/ui-kit": {
          singleton: true,
        },
        "@packages/shell-router": {
          singleton: true,
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
