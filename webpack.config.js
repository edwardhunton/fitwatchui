var webpack = require('webpack');

var config = {
    context: __dirname + '/',
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ]


}

if(process.env.NODE_ENV === 'production'){
    config.output.path = __dirname + '/dist';
}

module.exports = config;