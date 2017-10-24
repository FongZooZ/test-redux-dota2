module.exports = {
  entry: './app/index.js',
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
          presets: ['env', 'es2015', 'react'],
          plugins: [require('babel-plugin-transform-object-rest-spread')]
        }
      }
    }]
  }
};