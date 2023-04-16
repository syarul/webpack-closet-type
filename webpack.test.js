const path = require('path')

module.exports = {
  entry: './sample/sample.closet.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './output'),
    filename: 'test.js'
  },
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        test: /\.js$/,
        use: './index.js'
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js'],
    fallback: {
      fs: false,
      buffer: false
    }
  },
  target: 'web'
}
