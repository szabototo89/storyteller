const { resolve } = require("path");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    context: resolve("src"),
    entry: "./index.tsx",
    output: {
      path: resolve("dist"),
      filename: "bundle.js"
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "awesome-typescript-loader",
              options: {
                silent: true
              }
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            use: ["css-loader"]
          })
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            use: [
              { loader: "css-loader", options: { sourceMap: true } },
              { loader: "sass-loader", options: { sourceMap: true } }
            ]
          })
        }
      ]
    },

    resolve: {
      alias: {
        test: resolve(__dirname, "test")
      },
      modules: [resolve(__dirname, "src"), resolve(__dirname, "node_modules")],
      extensions: [".js", ".ts", ".tsx", ".css", ".scss"]
    },

    devtool: "inline-sourcemap",

    plugins: [
      new ExtractTextPlugin("bundle.css"),
      new ProgressBarPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
        inject: "body"
      })
    ]
  };
};
