import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'

Vue.use(VueRouter)
const Router = new VueRouter({
    routes: [
        {
            path: '*',
            name: '登录',
            component: HelloWorld,
        },
    ]
})
export default Router