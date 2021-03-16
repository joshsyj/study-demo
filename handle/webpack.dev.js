var path = require('path')
 
module.exports = {
    mode: "development",
    entry: {
        main: "./decorate.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "decorate.js"
    },
    module: {
        rules: [ //webpack 4.X写法
            {
                test: /.js$/,
                use: ['babel-loader']
            }
        ]
    }
}