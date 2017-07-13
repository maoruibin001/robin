# Bootstrap + Vue + webpack + express项目实践

## 目录结构
```
    +app    服务器端node源代码。
    +bin    服务器启动目录
    +build  项目构建和开发环境搭建目录
    +config 项目配置目录
    +public 前端代码目录
    +static 静态文件目录
    +util   工具目录
```

## 注意事项

    * JS统一采用ES6语法
    * 前端库需要配置在webpack和package.json中，打包时会统一打成vendor.bundle.js被引入

## 第三方参考库
    * VUE http://vuejs.org/v2/guide/
    * Bootstrap http://www.bootcss.com/
    * express http://www.expressjs.com.cn/
    * webpack http://webpack.github.io/docs/

## 安装依赖

    * 安装node
    * 安装全局npm
    * 安装全局webpack
    * 安装工程依赖

```
    cd path/to/project
    npm install
```

## 打包&开发环境
    * 上产打包
    ```
    npm run build & npm start
    ```
    * 开发环境
    ```
    npm run dev
    ```