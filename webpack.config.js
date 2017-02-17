const path = require('path');

console.log(path.resolve(__dirname, 'dist'))

const config = {
  entry: './app/index.jsx',
  output: {
    publicPath: "/dist/",
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;
