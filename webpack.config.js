import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import dotenv from 'dotenv';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

dotenv.config();

const isProduction = process.argv.indexOf('prod') > -1;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: isProduction ? 'production' : 'development',
  entry: {
    loader: path.resolve(`${__dirname}/src/index.ts`),
  },
  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: isProduction ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].js',
    publicPath: '/',
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: isProduction ? false : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader' }],
      },
      {
        test: [/\.sass$/, /\.scss$/, /\.less$/, /\.css$/],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true,
        },
      }),
    ],
    //		sideEffects: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [path.resolve(`${__dirname}/src`), 'node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Bootstrap',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    //		new CopyPlugin({
    //			patterns: [{from: 'res', to: 'res'}]
    //		}),
    new webpack.DefinePlugin({
      ENV: JSON.stringify({
        SERVER_HOST: process.env.SERVER_HOST,
      }),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: isProduction ? 'static' : 'server',
      analyzerHost: '0.0.0.0',
      openAnalyzer: false,
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: isProduction ? 30000 : 0,
    }),
    //		new WorkboxPlugin.InjectManifest({
    //			swSrc: './src/sw.ts',
    //		})
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
  },
};
