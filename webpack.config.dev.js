var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: "./examples/index.js",
    output: {
        path: path.resolve(__dirname, "demo"),
        filename: "js/bundle.js",
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                    {
                        loader: "sass-loader", options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: 'assets/images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            showErrors: true,
            cache: true,
            title: "Vue Material Chips",
            template: path.join(__dirname, 'examples/index.html')
        })
    ]
}