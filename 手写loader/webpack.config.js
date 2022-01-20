const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: resolve(__dirname, './src/app.js'),
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'app.js'
    },
    resolveLoader: {
        modules: ['node_modules', resolve(__dirname, './loaders')]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tpl$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'tpl-loader',
                        options: {
                            log: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './index.html')
        }),
    ],
    devServer: {
        port: 3333,
        open: true
    }
}