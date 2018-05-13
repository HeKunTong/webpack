const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
// const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
  output: {
    path: path.join(rootPath, 'dist'),
    filename: 'static/[name].[hash].js',
    chunkFilename: 'static/[id].[hash].js',
    publicPath: '/' /*/static/*/
  },
  module: {
    rules: [{
      test: /\.(css|less)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
    }, {
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
      template: path.join(rootPath, 'index.html'),
      title: 'hello webpack!',
      chunksSortMode: 'none'
    }),
    // new ParallelUglifyPlugin(),
    // new HtmlIncludeAssetsPlugin()
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