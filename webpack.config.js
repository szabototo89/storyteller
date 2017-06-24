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
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                })
            }
        ]
    },

    devServer: {
        port: 9000,
        publicPath: '/dist/'
    },

    resolve: {
        extensions: [".js", ".ts", ".tsx", ".css", ".scss"]
    },
    devtool: 'sourcemap',
    target: 'web',
    plugins: [
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            title: 'StoryTeller [' + environment + ']',
            template: path.resolve(__dirname, 'src/index.ejs')
        }),
    ]
}; 