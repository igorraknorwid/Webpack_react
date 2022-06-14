const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const styleLoadrs = (extra) => {
  const loaders = [MiniCssExtractPlugin.loader, "css-loader"];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devtool: "inline-source-map",

  devServer: {
    // static: {
    //   directory: path.join(__dirname, "public"),
    // },
    // compress: true,
    port: 4200,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "test webpack",
      template: path.join(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: styleLoadrs(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: styleLoadrs("sass-loader"),
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/,
        type: "asset/resourse",
      },
    ],
  },
};
