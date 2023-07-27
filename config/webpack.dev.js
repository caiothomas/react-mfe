const { merge } = require('webpack-merge')
const paths = require('./paths')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: "development",
    entry: paths.src + "/index.js", // main js
    output: {
        path: paths.public + "/dist", // output folder
        publicPath: "/",
    },
    module: {
        rules: [{
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },

        ],
    },
    plugins: [],
})