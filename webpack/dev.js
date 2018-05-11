const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  noInfo: true,
  hot: true,
  stats: {
    colors: true,
    chunks: false
  },
  progress: true,
  inline: true
}));

//实现无刷新的替换
app.use(hotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(3030, function (error) {
  error && console.log('error-----------', error);
  console.log('Example app listening on port 3000!\n');
});