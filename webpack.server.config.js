
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    server: ['./src/server.js']
  },
  output: {
    path: path.resolve('assets'),
    filename: '[name].js',
    publicPath: '/',
    libraryTarget: "commonjs2"
  },
  target: 'node',
  module: {
    loaders: [
      { 
        test: /\.(js|jsx)$/, 
        loader: 'babel' 
      },
      { 
        test: /\.scss$/, 
        loader: 'style!css!autoprefixer?{browsers:["> 1%", "IE 8"]}!sass'
      },
      { 
        test: /\.css$/, 
        loader: 'style!css!autoprefixer?{browsers:["> 1%", "IE 8"]}' 
      },
      { 
        test: /\.(png|jpg)$/, 
        loader: 'url?limit=8192' 
      }
    ]
  }
};
