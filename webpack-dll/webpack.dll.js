const webpack = require('webpack')
const { resolve } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const packagejson = require('./package.json')
console.log(Object.keys(packagejson.dependencies))
module.exports = {
  entry: {
    vendor: Object.keys(packagejson.dependencies)
  },
  output: {
    path: resolve(__dirname, './dll'),
    filename: '_dll_[name].js',
    // name === library
    library: '_dll_[name]'
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      // name === library
      name: '_dll_[name]',
      path: resolve(__dirname, './dll/[name].manifest.json'),
    })
  ]
}