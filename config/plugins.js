/* eslint-disable */
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import WebpackPerformOnBuildPlugin from 'simple-webpack-clean-plugin';
/* eslint-enable */

export default function ({ENV, DEV, PROD, isServer}) {
  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
    // new ChunkManifestPlugin({
    //   filename: 'manifest.json',
    //   manifestVariable: 'webpackManifest',
    //   inlineManifest: true
    // }),
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false,
    }),
    new WebpackPerformOnBuildPlugin(
      {
        src: path.resolve(__dirname, '..', 'build/public'),
        clearAll: false,
        cleanCondition: file => ['manifest', 'vendor', 'polyfill', 'main'].filter(i => file.indexOf(i) >= 0).length,
      }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: __dirname,
        postcss: [precss, autoprefixer],
      },
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
      __DEV__: JSON.stringify(DEV),
      __PROD__: JSON.stringify(PROD),
    }),
  ];

  return !isServer ? plugins.concat(new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: true,
    minify: { removeAttributeQuotes: true },
    filename: 'index.html',
    chunks: true,
  })) : plugins;
}
