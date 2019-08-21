/**
 * Webpack Libray Build
 * See: https://github.com/kalcifer/webpack-library-example/blob/master/webpack.config.babel.js
 */
const path = require('path')
const LIB_NAME = 'KalenderJawa'
const version = process.env.npm_package_version

module.exports = {
  //mode: 'development',
  mode: 'production',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: `${LIB_NAME.toLowerCase()}-${version}.min.js`,
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
