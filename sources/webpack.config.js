const config = {
  entry: './index.js',
  output: {
    path: '../dist/',
    filename: 'bideo.js'
  },
  externals: [
    {"window": "window"}
  ],
  module: {
    loaders: [
      {test: /.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}

module.exports = config;
