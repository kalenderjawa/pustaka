/**
 * Webpack Libray Build
 * See: https://github.com/kalcifer/webpack-library-example/blob/master/webpack.config.babel.js
 */
const path = require('path')

const LIB_NAME = 'KalenderJawa'
const version = process.env.npm_package_version

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: `${LIB_NAME.toLowerCase()}.min.js`,
    libraryTarget: 'umd',
    globalObject: 'this',
    library: `${LIB_NAME}`
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: path.resolve(__dirname, '/node_modules'),
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-flow", "@babel/preset-env"]
        }
      }
    ]
  }
}
