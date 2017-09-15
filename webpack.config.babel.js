import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import getPlugins from './config/plugins';
import loaders, {serverCss} from './config/loaders';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';

const plugins = getPlugins({
  ENV,
  DEV,
  PROD,
});

const entry = {
  polyfills: ['babel-polyfill', 'react-hot-loader/patch'],
  vendor: ['react', 'react-dom',
    'react-router',
    'react-router-config',
    'react-router-dom',
    'prop-types',
  ],
  main: DEV
    ? ['./src/client.js']
    : ['webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './src/client.js'],
};


const clientConfig = {
  name: 'client',
  entry,
  devtool: 'inline-source-map',
  output: {
    path: `${__dirname}/build`,
    filename: '[name].[hash].js',
    publicPath: '',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devServer: {
    contentBase: './build',
    stats: {
      colors: true,
      timings: true,
      quite: false,
      noInfo: false,
    },
    hot: true,
    historyApiFallback: true,
  },

  module: {
    rules: loaders,
  },

  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
  },

  plugins: [
    ...plugins,
    new webpack.NormalModuleReplacementPlugin(
      /bundles.js/,
      './async-bundles.js',
    ),
  ],
};

const serverConfig = {
  name: 'server',
  entry: ['./src/server/server.js'],
  output: {
    path: `${__dirname}/build`,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
  },

  target: 'node',
  module: {
    rules: [...loaders, {...serverCss}],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
  ],
  externals: [nodeExternals({
    // Load non-javascript files with extensions, presumably via loaders
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
};

module.exports = [
  clientConfig,
  serverConfig,
];
