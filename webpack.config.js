const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
    new FileManagerPlugin({
      events: {
        onStart: { delete: ['build'] },
      },
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
    historyApiFallback: true,
  },
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.[contenthash].js',
    publicPath: '/',
    assetModuleFilename: path.join('images', '[name].[contenthash][ext]'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('icons', '[name].[contenthash][ext]'),
        },
      },
    ],
  },
};
