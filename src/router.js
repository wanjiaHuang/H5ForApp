import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import NotFound from './components/404'

Vue.use(VueRouter)
const Router = new VueRouter({
    routes: [
        {
            path: '*',
            name: '登录',
            component: HelloWorld,
        },
        {
            path: '/404',
            name: '登录',
            component: NotFound,
        },
    ]
})
export default Router