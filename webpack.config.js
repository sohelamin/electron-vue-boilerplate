var webpack = require('webpack')
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=[name].[ext]?[hash]'
            }
        ]
    },
    // example: if you wish to apply custom babel options
    // instead of using vue-loader's default:
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        root: path.join(__dirname, '..'),
        extensions: ['', '.js', '.json', '.vue']
    },
    target: 'electron'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
    ]
} else {
    module.exports.devtool = '#source-map'
}