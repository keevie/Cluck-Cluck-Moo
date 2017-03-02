const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./lib/cluck_cluck_moo.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['*', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        }
      }
    ]
  },
  devtool: 'source-maps',
  externals: {
    "createjs": "createjs",
  },
};
