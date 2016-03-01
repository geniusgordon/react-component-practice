var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$|\.jsx$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }],
        preLoaders: [{
            test: /\.js$|\.jsx$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }]
    },
};

