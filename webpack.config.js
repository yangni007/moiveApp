var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
  }

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
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
                loader: ["style-loader","css-loader", "sass-loader"]
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
            }, {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
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
        new HtmlWebpackPlugin({
        //在最前面先定义下HtmlWebpackPlugin--
        //var HtmlWebpackPlugin = require('html-webpack-plugin');
            template: 'build/index.html',
            title: '',    //配合html-webpack-plugin的配置
        })
    ],
    performance: {
        hints:false   
    }    
};
