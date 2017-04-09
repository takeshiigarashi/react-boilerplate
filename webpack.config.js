const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: {
      bundle: './src/app.js'
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].js'
    },
    module: {
      loaders: [{
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }]
    }
  }
  ,
  {
      context: path.join(__dirname, 'src/css'),
      entry: {
          style: './style.scss'
      },
      output: {
          path: path.join(__dirname, 'public/css'),
          filename: '[name].css'
      },
      module: {
          loaders: [
              {
                  test: /\.scss$/,
                  loader: ExtractTextPlugin.extract({
                      fallback: 'style-loader',
                      use: 'css-loader?-url&minimize&sourceMap!sass-loader'
                  })
              }
          ]
      },
      devtool: 'source-map',
      plugins: [
          new ExtractTextPlugin('[name].css')
      ]
  }
];
