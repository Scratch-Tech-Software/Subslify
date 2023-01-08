const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.common.js');

const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new ReactRefreshWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'swc-loader',
            options: {
              parseMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    hot: true,
    liveReload: false,
    open: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    static: {
      directory: path.resolve(__dirname, 'static'),
      publicPath: '/',
    },
    // proxy: {
    //   context: ['/api/**', 'static/**', '/**'],
    //   target: 'http://localhost:5000',
    //   secure: false,
    // },
  },
};

module.exports = merge(common, dev);
