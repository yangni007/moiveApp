# webpack配置详解
##### 先配置入口文件和出口文件
```javascript
entry: {
        app: './src/app.jsx',
    },
output: {
    path: __dirname + '/build',
    filename: "[name].js",
},

```
##### 配置打包规则
```javascript
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
        }, 
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader',
            exclude: /node_modules/,
            options: {
                limit: 8192,
                name:'images/[name].[ext]',
            }
        }
    ]
}
```
将jsx，js从es6转成es5， sass编译成css并且插入到style标签中， 将图片转成base64编码
到这一步就可以打包出文件了，缺少的是将打包之后的文件放入服务器中。
##### 添加webpack-dev-server本地服务器
```javascript
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
```
基本的webpack配置完成了，现在可以添加一些优化的插件

##### 优化插件
html-webpack-plugin： 给html文件引入外部资源，生成html文件。
autodll-webpack-plugin： 抽离第三方插件
