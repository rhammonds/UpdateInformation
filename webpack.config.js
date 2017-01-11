"use strict";

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './Scripts/components/app.jsx',
        'gas-mileage-app' : './Scripts/components/gas-mileage-app.jsx'},
    output: { path: __dirname, filename: './Scripts/components/[name].bundle.jsx' },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    babelrc: false,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};