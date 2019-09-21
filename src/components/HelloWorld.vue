<template>
    <div class="hello">
        <div class="notFound-layer allPageBox">
            <van-nav-bar title="示例页面"/>
            <van-cell-group>
                <van-field v-model="shipData.name" label="船舶名称" placeholder="请输入船舶名称"/>
                <van-field v-model="shipData.MMSI" label="MMSI" placeholder="请输入船舶MMSI"/>
                <van-field v-model="shipData.type" label="船舶类型" @click="showPicker=true"/>
                <van-cell title="前往404页面" is-link @click="routerTo('/404')"/>
                <van-cell title="打开侧边栏" is-link @click="routerTo('./rightPopup')"/>
                <van-cell title="打开表单示例页面" is-link @click="routerTo('./testForm')"/>
                <van-cell title="折叠面板功能" is-link @click="routerTo('./testForm')"/>
            </van-cell-group>
            <van-popup v-model="showPicker" position="bottom">
                <van-picker
                        show-toolbar
                        :columns="shipTypeData"
                        @cancel="showPicker = false"
                        @confirm="onConfirm"
                />
            </van-popup>
        </div>

        <!--<van-button type="default">默认按钮</van-button>-->
        <!-- -<h1>{{ indexMsg }}</h1>- -->
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Vue from 'vue';
    import {Field} from 'vant';
    import {Picker} from 'vant';
    import {Popup} from 'vant';
    import {shipTypeDic} from '../utils/dictionary'

    Vue.use(Field);
    Vue.use(Picker);
    Vue.use(Popup);
    export default {
        name: 'HelloWorld',
        data() {
            return {
                showPicker: false,
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
