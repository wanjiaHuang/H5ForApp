# H5前端项目文档
## 1、基础js框架及工具
   
>此项目由于主要用于移动端应用程序（app、小程序、手机浏览器等）内页调用展示。就目前主流框架来讲，vue属于轻量级，并且参与此项目的前端开发人员也有vue项目经验，因此选用了vue作为JS框架，并加上VueRouter作为路由跳转,需要node v 8以上
  
1.JS框架：
2.


### 1.1 vue
- Vue.js(v2.6)
此项目由于主要用于移动端应用程序（app、小程序、手机浏览器等）内页调用展示。就目前主流框架来讲，vue属于轻量级，并且参与此项目的前端开发人员也有vue项目经验
- Vuex
状态存储
- VueRouter
作为路由跳转
- sass

- vant


## 2、项目说明
### 2.1 关键目录说明
- `public` 此文件夹内文件不会被webpack打包，（绝对目录引用的资源也不会被webpack打包）
- `assets` 存放静态资源文件，如图片
- `components` 组件目录，放置业务组件或者可复用组件
- `存放配置文件`
- `mixins` 混入文件目录，放置混入其他组件的文件，实现可复用的功能组件的分发
- `plugins` 放置js插件
- `styles` 存放样式相关文件
- `utils` 存放工具函数
## 3、项目开发

### 项目安装命令
```
npm install
```
### 项目本地运行命令
```
npm run serve
```

### 项目打包命令
```
npm run build
```

sass  ok
route ok
vant  ok
store