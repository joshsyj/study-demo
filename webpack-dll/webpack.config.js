const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 输出打包目录前先把 dist/ 删掉
const { resolve, join } = require('path');
const packagejson = require("./package.json");
module.exports = {
  entry: {
    main: './src/main.js',
    // vendor: Object.keys(packagejson.dependencies)
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, './dist')
  },
  module: {
    // 不去解析 jquery 中的依赖库
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.js$/,
        // loader: 'babel-loader',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        },
        include: resolve(__dirname, './src'),// 指定为 src 文件
        exclude: /node_modules/
      }
    ]
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './static/index.html'),
      filename: 'index.html'
    }),

    new AddAssetHtmlPlugin({
      includeSourcemap: false,//不加他会加载sourcemap文件
      filepath: resolve(__dirname, './dll/_dll_vendor.js'),
    }),
    new webpack.DllReferencePlugin({
      // 注意: DllReferencePlugin 的 context 必须和 package.json 的同级目录，要不然会链接失败
      context: resolve(__dirname, './'),
      manifest: resolve(__dirname, './dll/vendor.manifest.json'),
    }),


    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks (module) {
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource &&
    //       /\.js$/.test(module.resource) &&
    //       module.resource.indexOf(
    //         join(__dirname, '../node_modules')
    //       ) === 0
    //     )
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'runtime',
    //   filename: '[name].[hash].js',
    //   chunks: ['vendor']
    // }),
  ]
}