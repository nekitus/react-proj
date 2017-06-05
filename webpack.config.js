const webpack = require('webpack');

const path = require('path');
module.exports = {

	entry: __dirname + '/src/index',
	output: {
	    filename: 'build.js',
        path: __dirname + '/build'
    },
	watch: true,
    plugins: [
        new webpack.PrefetchPlugin('react')
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','env']
                    }
                }
                // query: {
                //     presets:['react']
                // }
            }
        ]
    },
    devtool: "source-map"
};

