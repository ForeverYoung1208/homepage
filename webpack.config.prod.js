const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge( common, {
  mode: 'production',
  module: {
    rules:[
      {
        test: /\.s?css|sass $/,
        loader:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.bundle.css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ]
});