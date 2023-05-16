const path = require('path');
const {nodeModules} = require("ts-loader/dist/constants");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin= require('webpack-clean-plugin');


module.exports = {
    entry: "./src/",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",

    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /nodeModules/,

        }]
    },
    plugins: [
        new CleanWebPackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
]

}
