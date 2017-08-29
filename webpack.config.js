const { resolve } = require('path');
const webpack=require('webpack');
const path = require('path');
const babelpolyfill = require("babel-polyfill");
const ExtractTextPlugin=require('extract-text-webpack-plugin')

module.exports = {
    context: __dirname,
    entry:  [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {
        path: resolve(__dirname, 'build'),//打包后的文件存放的地方
        filename: "bundle.js",//打包后输出文件的文件名
        publicPath: '/', // 对于热替换（HMR）是必须的，让webpack知道在哪里载入热更新的模块
    },

    devServer: {
        hot:true,
        contentBase: resolve(__dirname, 'build'),
        historyApiFallback: {
            index: "/index.html"
        },
        publicPath: '/',  // 和上文output的"publicPath"值保持一致
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js",".sx", ".js", ".json"]
    },

    module: {
        rules: [
            /*  test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
                loader：loader的名称（必须）
                include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
                query：为loaders提供额外的设置选项（可选）*/
            {
                test: /\.jsx|js?$/,
                use: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            },
            {
                // ASSET LOADER
                // Reference: https://github.com/webpack/file-loader
                // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                // Rename the file using the asset hash
                // Pass along the updated reference to your code
                // You can add here any file extension you want to get copied to your output
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|otf|ttf)$/,
                use: [{
                    loader: 'url-loader?limit=100000'
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" //将所有的计算后的样式加入页面中(必须先写style-loader)
                    },
                    {
                        loader: "css-loader", //使你能够使用类似@import 和 url(...)的方法实现 require()的功能
                        options: {
                            modules:true,    //这个参数是让css引入js的模块化思想，通过CSS模块，所有的类名，动画名默认都只作用于当前模块
                            localIdentName: '[path]__[name]__[local]'  //模块化后class的名称
                        }
                    },
                ]
            },
            /*{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                    localIdentName: '[path]__[name]__[local]'
                                }
                            },
                            {loader: 'sass-loader'}
                            ]
                    })
            },*/
            {
                test:/\.scss$/,
                use:[
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: 'css-loader',
                            options:{
                                modules:true,
                                localIdentName: '[path]__[name]__[local]'
                            }
                        },
                        {
                            loader:'sass-loader'
                        },
                    ],

            },

        ],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
       // new ExtractTextPlugin('style.css')
    ],

    devtool: "cheap-eval-source-map",

};
