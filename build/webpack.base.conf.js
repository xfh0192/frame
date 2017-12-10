const path = require('path')
// const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
                // options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)$/,
                use: ['url-loader']
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}