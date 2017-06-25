const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => {
    const sourceFolder = resolve('src');
    const destinationFolder = resolve('dist');

    return {
        context: sourceFolder,
        entry: './index.tsx',
        output: {
            path: destinationFolder,
            publicPath: '/dist/',
            filename: 'bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: sourceFolder,
                    loader: 'awesome-typescript-loader'
                },
                {
                    test: /\.css$/,
                    include: sourceFolder,
                    use: ExtractTextPlugin.extract({
                        use: [
                            'css-loader'
                        ]
                    })
                },
                {
                    test: /\.scss$/,
                    include: sourceFolder,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {loader: 'css-loader', options: {sourceMap: true}},
                            {loader: 'sass-loader', options: {sourceMap: true}}
                        ]
                    })
                }
            ]
        },

        resolve: {
            extensions: [".js", ".ts", ".tsx", ".css", ".scss"]
        },

        devtool: 'eval',

        plugins: [
            new ExtractTextPlugin('bundle.css')
        ]
    };
};