const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "styles.css",
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [
                //     MiniCssExtractPlugin.loader,
                //     { loader: "css-loader", options: { importLoaders: 1 } },
                //     "postcss-loader",
                // ],
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },

    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 9000,
        compress: true,
    },
};