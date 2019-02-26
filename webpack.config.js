var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer')
const AutoDllPlugin = require('autodll-webpack-plugin');

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
  }

module.exports = {
    entry: {
        
        app: './src/app.jsx',
        // vendor: ['react', 'react-dom', 'react-router-dom'],
        react: 'react',
        'react-dom': 'react-dom',
        'react-router': 'react-router',
        'react-router-dom': 'react-router-dom',
        'axios': 'axios',
        'antd-mobile': 'antd-mobile'
    },
    output: {
        path: __dirname + '/build',
        filename: "[name].js",
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
            template: 'src/index.html',
            title: '',    //配合html-webpack-plugin的配置
        }),

        new AutoDllPlugin({
            inject: true, // will inject the DLL bundle to index.html
            debug: true,
            filename: '[name].js',
            path: './build',
            entry: {
              dll: [
                'react',
                'react-dom',
                'react-router',
                'react-router-dom',
                'axios',
                'antd-mobile'
              ]
            },
        })
    ],
    
    performance: {
        hints:false   
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
};
