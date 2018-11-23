const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseConfig,{
    devtool: 'source-map',
    plugins: [
        //精简代码
        new UglifyJSPlugin({
            sourceMap: true
        }),
        //指定环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':'production'
        })
    ]
});