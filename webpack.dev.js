const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const webpack = require('webpack');

module.exports = merge(baseConfig,{
    devtool: "inline-source-map",   /*仅用于开发环境追踪代码*/
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        //指定环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':'development'
        })
    ]
});
