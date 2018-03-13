const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {   
        rules: [{
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            // 輸出的文件名稱，要注意的是這邊的root path是module.exports.output.path (在這個project內就是build folder)
            filename:'./index.html'
        }),
        new HtmlWebpackPlugin({
          template: './src/test.pug',
          // 輸出的文件名稱，要注意的是這邊的root path是module.exports.output.path (在這個project內就是build folder)
          filename:'./test.html'
        })
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: path.join(__dirname,'build'),
        compress: true,
        port: 9000
    }
  };