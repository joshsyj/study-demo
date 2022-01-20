const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

module.exports = {
    entry: './src/js/index.js',
    mode:'development',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './index.html')
        })
    ],
    devServer: {
        open: true
    }
}