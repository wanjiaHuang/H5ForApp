import Vue from 'vue'
import Vuex from 'vuex'
import testH5 from './modules/testH5'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        testH5,
    }
})
export default store