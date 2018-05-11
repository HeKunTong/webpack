const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const os = require('os');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const rootPath = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    app: path.join(rootPath, 'src', 'index.js'),
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    publicPath: '/',
    path: path.join(rootPath, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    modules: [ // 优化模块查找路径
      path.join(rootPath, 'src'),
      path.join(rootPath, 'node_modules') // 指定node_modules所在位置 当你import第三方模块式 直接从这个路径下搜寻
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'happypack/loader?id=babel-loader'
      },
      include: path.join(rootPath, 'src') // 指定需要加载的文件夹
    }, {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader?limit=10240&name=img/[name]-[hash:6].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      use: {
        loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
      }
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new HappyPack({
      id: 'babel-loader',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool,
      verbose: true
    }),
    new NyanProgressPlugin(),
  ]
};
