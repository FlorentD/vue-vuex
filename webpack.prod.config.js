const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    vendor: ['vue', 'vuex', 'vue-router'],
    app: './scripts/index.js',
  },
  output: {
    path: __dirname,
    filename: 'dist/js/app.js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.(vue)$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader',
            css: 'style-loader!css-loader',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'dist/js/vendor.js',
    }),
    new ExtractTextPlugin('dist/styles/style.css'),
  ],
};
