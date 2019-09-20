import Vue from 'vue'
import App from './App.vue'
import '@/utils/vantImport.js'
import router from './router'
import store from './store/index'
import './styles/index.scss'


Vue.config.productionTip = false


new Vue({
    el:'#app',
    router,
    store,
  render: h => h(App),
}).$mount('#app')
