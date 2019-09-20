const testH5 = {
    state: {
        indexMsg:'这是首页'
    },
    mutations:{
        //设置indexMsg参数
        setIndexMsg(state, params){
            state.indexMsg = params
        }
    },
    getters: {
        indexMsg:state=>state.indexMsg
    },
    action:{}
}
export default testH5