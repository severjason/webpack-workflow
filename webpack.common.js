const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./app/ts/main.ts"),
        vendor: path.resolve(__dirname, "./app/ts/vendor.ts")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: '/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "babel-loader",
                    "ts-loader"
                ],
                include: path.resolve(__dirname, "./app/ts"),
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                        name: "./images/[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot|ico)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        limit: 100000,
                        name: "./fonts/[name].[ext]"
                    }
                }]
            }
        ]
    }

};
