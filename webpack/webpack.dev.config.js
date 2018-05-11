const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');

module.exports = {
  module: {
    rules: [{
      test: /\.(css|less)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
    }]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(rootPath, 'index.html'),
      title: 'hello webpack!'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      host: '127.0.0.1',
      port: 3000,
      proxy: 'http://127.0.0.1:3030/'
    }, {
      reload: false
    }),
  ]
};
