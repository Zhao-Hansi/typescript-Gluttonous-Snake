const path = require('path');
const {nodeModules} = require("ts-loader/dist/constants");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin= require('webpack-clean-plugin');


module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",

    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets:[
                        [
                            "@babel/preset-env",
                            {
                                targets: {
                                    "chrome":"88",
                                    "ie": "11"
                                },
                                "corejs":"3",
                                "useBuiltIns": "usage",
                            },
                        ]
                    ]
                }
            },'ts-loader'],
            exclude: /nodeModules/,
        },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ],
    },

    plugins: [
        new CleanWebPackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }

}
