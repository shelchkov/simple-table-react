const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: { path: path.join(__dirname, "demo-app"), filename: "index.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: { contentBase: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new DefinePlugin({ "process.env.TAG_NAME": JSON.stringify(process.env.TAG_NAME) }),
  ],
}
