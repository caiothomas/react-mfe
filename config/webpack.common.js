// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require('./paths')

module.exports = {
    // entry: [paths.src + '/index.js'],
    // module: {
    //     rules: [
    //         // {
    //         //     test: /\.tsx?$/,
    //         //     use: 'ts-loader',
    //         //     exclude: /node_modules/,
    //         // },
    //         {
    //             test: /\.?js$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: "babel-loader",
    //                 options: {
    //                     presets: ["@babel/preset-env", "@babel/preset-react"],
    //                 },
    //             },
    //         },
    //         {
    //             test: /\.s[ac]ss$/i,
    //             use: [
    //                 "style-loader",
    //                 "css-loader",
    //                 "sass-loader",
    //             ],
    //         },
    //         // { test: /\.js$/, use: ['babel-loader'] },
    //         // {
    //         //     test: /\.(ts|js)?$/,
    //         //     exclude: /node_modules/,
    //         //     use: {
    //         //         loader: "babel-loader",
    //         //         options: {
    //         //             presets: ["@babel/preset-env", "@babel/preset-typescript"],
    //         //         },
    //         //     },
    //         // },
    //         { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
    //         { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    //     ],
    // },
    // // output: {
    // //     path: paths.build,
    // //     filename: '[name].bundle.js',
    // //     publicPath: '/',
    // //     clean: true,
    // //},
    // output: {
    //     path: paths.public + "/dist", // output folder
    //     publicPath: "/",
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // base html
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: paths.public,
                to: 'assets',
                globOptions: {
                    ignore: ['*.DS_Store'],
                },
                noErrorOnMissing: true,
            }, ],
        }),
    ],
    // resolve: {
    //     modules: [paths.src, 'node_modules'],
    //     extensions: ['.js', '.jsx', '.json', '.tsx', '.ts', ],
    //     alias: {
    //         '@': paths.src,
    //         assets: paths.build,
    //     },
    // },
}