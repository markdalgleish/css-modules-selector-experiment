var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

var path = require('path');
var ejs = require('ejs');
var fs = require('fs');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?module&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader') },
      { test: /\.svg$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  postcss: [
    require('./postcss-modules-scoped-selectors'),
    require('autoprefixer-core')
  ],

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new ReactToHtmlPlugin('index.html', 'index.js', {
      template: ejs.compile(fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8'))
    })
  ]
};
