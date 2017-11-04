var path = require('path');

var config = {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2016']
        }
      }
    ]
  }
};

module.exports = config;
