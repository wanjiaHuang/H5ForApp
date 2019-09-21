import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Router = new VueRouter({
    routes: [
        {
            path: '*',
            name: '示例页面',
            component: () => import(/*webpackChunkName:"HelloWorld"*/"@/components/HelloWorld"),
        },
        {
            path: '/testForm',
            name: '表单示例页面',
            component: () => import(/*webpackChunkName:"testForm"*/"@/components/testPage/testForm"),
        },

        {
            path: '/404',
            name: '登录',
            component: () => import(/*webpackChunkName:"404"*/"@/components/404"),
        },
        {
            path: '/rightPopup',
            name: '滑动侧边栏',
            component: () => import(/*webpackChunkName:"rightPopup"*/"@/components/testPage/rightPopup"),
        },


    ]
})
export default Router