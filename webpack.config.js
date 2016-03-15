var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: [
      'webpack/hot/dev-server',
      path.resolve('./js/index.js')
    ]
  },
  output: {
    // path: path.resolve(__dirname, 'assets/js]'),
    filename: '[name].js',
    publicPath: '/assets/js'
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=15000'
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  externals: {
    jquery: 'jQuery'
  }
};
