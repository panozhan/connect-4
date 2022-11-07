const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react']
            }
          }
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Connect-4 React App',
            template: 'src/index.html'
        })],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        }, 
        compress: true,
        port: 8000
    },
    mode: 'development',
    watch: true,
  };
  