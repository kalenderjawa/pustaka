/**
 * Webpack Libray Build
 * See: https://github.com/kalcifer/webpack-library-example/blob/master/webpack.config.babel.js
 */
const path = require('path')
const LIB_NAME = 'KalenderJawa'

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: `${LIB_NAME.toLowerCase()}-[contenthash]-bundle.js`,
    libraryTarget: 'umd',
    globalObject: 'this',
    library: `${LIB_NAME}`
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}
