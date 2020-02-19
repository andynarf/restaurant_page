const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
     filename: 'main.js',
     filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
     module: {
         rules: [
           {
             test: /\.css$/,
             use: [
               'style-loader',
               'css-loader',
             ],
           },
           {
               test: /\.(png|svg|jpg|gif)$/,
               use: [
                   'file-loader',
               ],
           },
         ],
       },
};
