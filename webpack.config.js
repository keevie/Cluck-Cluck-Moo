module.exports = {
  entry: "./lib/cluck_cluck_moo.js",
  output: {
    filename: "./lib/bundle.js"
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
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
