const HtmlWebpackPlugin = require('html-webpack-plugin');
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
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}