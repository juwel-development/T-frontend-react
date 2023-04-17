/* eslint-disable @typescript-eslint/no-var-requires, no-undef */
// const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

const CircularDependencyPlugin = require('circular-dependency-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const {transform} = require('@formatjs/ts-transformer');

const path = require('path');

const isProduction = process.argv.indexOf('prod') > -1;

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        loader: path.resolve(__dirname + '/src/index.ts'),
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: isProduction ? '[name].[contenthash].js' : '[name].js',
        chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].js',
        publicPath: '/'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: isProduction ? false : 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{loader: 'ts-loader'}]
            },
            {
                test: [/\.sass$/, /\.scss$/, /\.less$/, /\.css$/],
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: true,
                    mangle: true
                }
            })
        ],
//		sideEffects: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CircularDependencyPlugin({
            allowAsyncCycles: false,
            exclude: /node_modules/,
        }),
        new HtmlWebpackPlugin({
            title: 'Bootstrap',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        }),
        //		new CopyPlugin({
        //			patterns: [{from: 'res', to: 'res'}]
        //		}),
        new webpack.DefinePlugin({
            ENV: JSON.stringify({
                SERVER_HOST: process.env.SERVER_HOST
            })
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: isProduction ? 'static' : 'server',
            analyzerHost: '0.0.0.0',
            openAnalyzer: false
        }),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: isProduction ? 30000 : 0}),
        //		new WorkboxPlugin.InjectManifest({
        //			swSrc: './src/sw.ts',
        //		})
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        historyApiFallback: true,
    }
};