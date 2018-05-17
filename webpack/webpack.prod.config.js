const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
  output: {
    path: path.join(rootPath, 'dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].js',
    publicPath: '/static/'
  },
  module: {
    rules: [{
      test: /\.styl$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader'],
    }],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: rootPath,
      verbose: false
    }),
    new CopyWebpackPlugin([{
      context: path.join(rootPath, 'static'),
      from: '**/*',
      ignore: ['*.md'],
    }]),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(rootPath, 'src', 'index.html'),
      title: 'hello webpack!',
      chunksSortMode: 'none'
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: 'vendor',
          name: 'vendor'
        }
      }
    },
    minimize: true
  }
};