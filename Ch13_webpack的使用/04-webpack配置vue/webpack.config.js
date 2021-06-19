const path = require('path');

module.exports = {
    // 导入
    entry: './src/main.js',
    // 导出
    output: {
        // path:动态获取的路径,
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // url的地址前面都会拼接下面这个
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于limit时，会将图片编译成base64字符串形式
                            // 当加载的图片，大于limit时，需要使用file-loader模块进行加载 
                            // limit: 154000
                            limit: 8900,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        // alias:别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}