<template>
    <div class="hello">
        <div class="notFound-layer allPageBox">
            <van-nav-bar title="示例页面"/>
            <!--输入框区域-->
            <van-cell-group>
                <van-field v-model="shipData.name" label="船舶名称" placeholder="请输入船舶名称"/>
                <van-field v-model="shipData.MMSI" label="MMSI" placeholder="请输入船舶MMSI"/>
                <van-field v-model="shipData.type" label="船舶类型" @click="showPicker=true" readonly/>
            </van-cell-group>
            <!--拉伸区域-->
            <van-cell-group>
                <van-collapse accordion v-model="activeName">
                    <van-collapse-item title="船员管理" name="1">
                        <van-field value="张三丰" label="相关人员"/>
                        <van-field value="船长" label="在船任职"/>
                    </van-collapse-item>
                </van-collapse>
            </van-cell-group>
            <!--侧边栏展示表单-->
            <van-cell title="侧边栏展示表单" is-link @click="showPopup"/>
            <van-popup v-model="show" position="right" :style="{ width: '70%',height:'100%' }">
                <right-popup/>
            </van-popup>
            <!--路由跳转区域-->
            <van-cell title="打开表单示例页面" is-link @click="routerTo('./testForm')"/>
            <van-cell title="前往404页面" is-link @click="routerTo('/404')"/>
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="shipTypeData"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                />
            </van-popup>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Vue from 'vue';
    import {Field} from 'vant';
    import {Picker} from 'vant';
    import {Popup} from 'vant';
    import {shipTypeDic} from '../utils/dictionary'
    import RightPopup from "./testPage/rightPopup";

    Vue.use(Field);
    Vue.use(Picker);
    Vue.use(Popup);
    export default {
        components: {RightPopup},
        name: 'HelloWorld',
        data() {
            return {
                activeName: '1',
                showPicker: false,
                show: false,
                shipData: {
                    name: '粤广州货',
                    MMSI: '',
                    type: '',
                    riverType: ''
                },
                shipTypeData: shipTypeDic
            }
        },
        computed: {
            ...mapState({
                indexMsg: state => state.testH5.indexMsg

            })
        },
        props: {
            msg: String
        },
        mounted() {
            this.$store.commit('setIndexMsg', 'hi')
        },
        methods: {
            routerTo(path) {
                this.$router.push({path: path})
            },
            onConfirm(value) {
                this.$set(this.shipData, 'type', value)
                this.showPicker = false
            },
            showPopup() {
                this.show = true
            },

            onClose() {
                this.show = false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
