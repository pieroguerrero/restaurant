const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

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
                use: [
                    "style-loader",
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader",
                ],
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //     type: 'asset/resource',
            // },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     type: "asset",
            // },
            {
                test: /\.(png|jpe?g|webp|git|svg|)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                    },
                ],
            },
        ],
    },

    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 9000,
        compress: true,
    },

    // optimization: {
    //     minimizer: [
    //         "...",
    //         new ImageMinimizerPlugin({
    //             minimizer: {
    //                 implementation: ImageMinimizerPlugin.imageminMinify,
    //                 options: {
    //                     // Lossless optimization with custom option
    //                     // Feel free to experiment with options for better result for you
    //                     plugins: [
    //                         ["gifsicle", { interlaced: true }],
    //                         ["jpegtran", { progressive: true }],
    //                         ["optipng", { optimizationLevel: 5 }],
    //                     ],
    //                 },
    //             },
    //         }),
    //     ],
    // },
};