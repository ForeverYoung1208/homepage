const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge( common, {
  mode: 'development',
  
  module: {
    rules:[
      {
        test: /\.s?css|sass $/,
        loader:[
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      }      
    ]
  },
  plugins: [
  ]
});