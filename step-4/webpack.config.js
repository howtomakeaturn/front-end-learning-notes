var path = require('path');

module.exports = {
  module: {
    loaders: [{
      loader: 'babel-loader',
    }]
  },
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/')
  }
}
