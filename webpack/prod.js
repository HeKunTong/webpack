const webpack = require('webpack');
const config = require('./webpack.config');

webpack(config, (err, stats) => {
  console.log( stats.toString({ chunks: false, color: true }) );
});