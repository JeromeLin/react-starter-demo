
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: ['webpack/hot/dev-server', './src/index.js']
  },
  output: {
    path: path.resolve('assets'),
    filename: 'js/[name].min.js',
    chunkFilename: 'js/[name].[chunkhash:8].min.js',
    publicPath: '/'
  },
  plugins: [
    // 提取公共依赖
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ],
  module: {
    loaders: [
      { 
        test: /\.(js|jsx)$/, 
        loader: 'babel',
        exclude: /node_modules/
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
  resolve: {
    extensions: ['', '.js', '.json', '.coffee']
  }
};
