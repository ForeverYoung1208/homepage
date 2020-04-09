const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output:{
    filename: 'js/main.bundle.js',
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        loader:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.bundle.css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ]
}