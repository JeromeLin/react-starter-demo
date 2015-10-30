
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: path.resolve('assets'),
    //   filename: 'js/[chunkhash:8].[name].min.js',
    filename: 'js/[name].min.js',
    chunkFilename: 'js/[chunkhash:8].chunk.min.js',
    publicPath: '/'
  },
  plugins: [
    // 提取公共依赖
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    // 压缩JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
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
  },
  // target: 'node',
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  },
  externals: {
    // 'react': 'React',
    // 'react-dom': 'ReactDom'
  }
};
