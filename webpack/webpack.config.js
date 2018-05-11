const base = require('./webpack.base.config');
const merge = require('webpack-merge');

let config;
if (process.env.NODE_ENV === 'production') {
  config = require('./webpack.prod.config');
  config.mode = 'production';
} else {
  config = require('./webpack.dev.config');
  config.devtool = 'inline-source-map';
  config.mode = 'development';
}

const configs = merge(base, config);

module.exports = configs;