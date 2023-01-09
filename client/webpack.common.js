const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    clean: true,
  },
  stats: {
    preset: 'minimal',
    builtAt: true,
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/normalize.css'),
        ],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name][ext]',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(__dirname, 'static/index.html'),
      favicon: path.resolve(__dirname, 'static/favicon.ico'),
      filename: 'index.html',
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
};

module.exports = common;
