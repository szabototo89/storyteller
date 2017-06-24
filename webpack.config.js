var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const environment = process.env.NODE_ENV || 'dev';

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader'
                    ]
                })
            }
        ]
    },

    devServer: {
        publicPath: '/dist'
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx", ".css", ".scss"]
    },
    devtool: 'sourcemap',
    target: 'web',
    plugins: [
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            title: 'Storyteller [' + environment + ']'
        }),
    ]
}; 