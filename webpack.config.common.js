const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:{
    filename: 'main.bundle.js',
  },
  module: {
    rules:[
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              // name: '[path][name].[ext]',
              name:'[name].[hash].[ext]',
              outputPath: 'img',
              useRelativePath: true
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}