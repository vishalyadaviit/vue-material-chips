var path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack')

module.exports = {
    entry: "./src/index.js",
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        library: 'VueMaterialChips',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                loader: 'vue-loader'
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
                    { loader: "vue-style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                    { loader: "postcss-loader" }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/',
                            esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "url-loader",
                options: {
                    limit: Infinity // everything
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        vue: 'vue'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}