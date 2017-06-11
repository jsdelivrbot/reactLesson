const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        compress: true,
        stats: 'errors-only',
        open: true,
        hot: true,
    },
})