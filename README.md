# H5前端框架说明
## 1、基础js框架
### 1.1 [vue(v2.6)](https://cn.vuejs.org/)
>此项目由于主要用于移动端应用程序（app、小程序、手机浏览器等）内页调用展示。就目前主流框架来讲，vue属于轻量级，并且参与此项目的前端开发人员也有vue项目经验，因此选用了vue作为JS框架

### 1.2 [vant](https://youzan.github.io/vant/#/zh-CN/intro)
>基于vue开发的轻量、可靠的 UI 组件库，对vue有较好的支持，官方文档友好。因为考虑到每个页面除了基础组件外，很少会同时用到其他功能组件，从优化资源请求的角度上考虑，目前框架采用的是`按需引入`的方式。

### 1.3 scss
>css预处理器，在CSS的语法基础上增加了变量、嵌套等功能。我们可以定义一些css变量，然后在js中使用它们
### 1.4VueRouter
>路由跳转功能。在vue基本的跳转功能上，又加入了`路由懒加载`功能，这样可以大大节省页面资源请求数量及大小
### 1.5 vuex
> 状态存储，目前框架有加入此功能，由于H5页面通常作为数据展示之用，后续如果父子组件传值可以满足需求，可以砍掉此功能
## 2、项目说明
### 2.1 关键目录/文件说明
- `dist` 打包后的文件放在此文件夹
- `public` 此文件夹内文件不会被webpack打包，（绝对目录引用的资源也不会被webpack打包）
- `src` 
    - `assets` 存放静态资源文件，如图片
    - `components` 组件目录，放置业务组件或者可复用组件
    - `mixins` 混入文件目录，放置混入其他组件的文件，实现可复用的功能组件的分发
    - `plugins` 放置js插件
    - `store` vuex目录
    - `styles` 存放样式相关文件
        - `common.scss` 全局自定义通用样式
        - `resetVant.scss` 重置Vant框架样式
        - `variables.scss` 定义scss变量，供其他文件引用
    - `utils` 存放工具函数
        - `dictionary.js` 字典文件
        - `vantImport.js` 这个文件会在main.js中引入，因此这个文件主要用于通用vant组件引入，没有在此文件引入而需要用到的组件，则在要用到的页面里面单独引入
- `router.js` 路由文件。目前写法采用的是懒加载写法，因此不需要单独import组件
- `babel.config.js` babel配置文件，其中`syntax-dynamic-import`是路由懒加载功能的插件

>特别说明：开发环境有加入了`postcss-pxtorem `插件，用于将`px`单位转化为 `rem`，如果某些样式只想要使用`px`单位，可以使用大写形式 `PX`
> rem 基准值可在`packpage.json`中找到`postcss-pxtorem`项，修改其`rootValue`

## 3、项目安装、运行、发布
由于本项目是基于vue-cli3来构建的，因此在开发环境中要求安装。(vue-cli3要求node的版本在8.9以上)

[1、node下载与安装](http://nodejs.cn/download/)
[2、vue-cli官方文档](https://cli.vuejs.org/zh/)

###安装vue-cli3
```
npm install -g @vue/cli
```
### 项目安装命令
```
npm install
```
安装依赖速度慢可以采用国内镜像。不过不推荐淘宝镜像，坑挺多的。

### 项目本地运行命令
```
npm run serve
```

### 项目打包命令
```
npm run build
```
