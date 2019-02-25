var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer')
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
  }

module.exports = {
    entry: {
        app: './src/app.jsx',
        react: 'react',
        reactDom: 'react-dom',
        antdMobile: 'antd-mobile'
    },
    output: {
        path: __dirname + '/build',
        filename: "app.js",
        // publicPath: 'build/'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-2']
                },
            },
            {
                test: /\.(css|scss)$/,
                loader: ["style-loader","css-loader", "postcss-loader", "sass-loader"] // 从后往前执行
            }, {
                test: /\.(png|jpg)$/,
                // use: 'url?limit=1024&name=[path][name].[ext]&outputPath=img/&publicPath=output/'
                loader: 'url-loader',
                exclude: /node_modules/,
                // include: [resolve('./src/asset/img')],
                
                options: {
                    limit: 8192,
                    name:'images/[name].[ext]',
                }
            }]
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,            //实时刷新
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                pathRewrite: {'^/api' : ''},
                secure: false
            }
        }
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['react', 'reactDom', 'antdMobile'],
        //     filename: '[name].js'
        // }),
        new HtmlWebpackPlugin({
        //在最前面先定义下HtmlWebpackPlugin--
        //var HtmlWebpackPlugin = require('html-webpack-plugin');
            template: 'build/index.html',
            title: '',    //配合html-webpack-plugin的配置
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'react',
                    chunks: "initial",
                    minChunks: 2,
                    filename: '[name].js'
                }
            }
        }
    },
    performance: {
        hints:false   
    }    
};
