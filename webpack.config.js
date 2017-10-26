module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    filename: './app/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'es2015', 'stage-0', 'react']
        }
      }
    }]
  }
};