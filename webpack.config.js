const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const babel_plugins = ['syntax-dynamic-import'];
if(process.env.NODE_ENV != 'development') {
    babel_plugins.push(["transform-react-remove-prop-types", {
        "mode": "wrap",
        "ignoreFilenames": ["node_modules"]
    }])
}

module.exports = {
    entry: {
        test: './src/component/webpacktest.js',
        app: './src/index.js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new  HtmlWebpackPlugin({
          template: path.resolve('src','index.html'),
          title: 'Output Management'
      }),
        new ExtractTextPlugin("styles.css")
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: {
                    presets: ['react',  ['es2015', {modules: false}] , 'stage-2'],
                    plugins: [babel_plugins]
                },
                include: path.resolve('src')
            }, {
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            discardComments: { removeAll: true }
                        }
                    }, "less-loader"]
                })
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    }
};