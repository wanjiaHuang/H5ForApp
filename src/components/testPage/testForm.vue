<template>
    <div id="test-form">
        <van-tabs v-model="active">
            <van-tab title="列表 1">
                <test-table/>
            </van-tab>
            <van-tab title="列表 2">内容2</van-tab>
            <van-tab title="列表 3">内容3</van-tab>
            <van-tab title="列表 4">内容4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Tab, Tabs} from 'vant';
    import TestTable from "./testTable";

    Vue.use(Tab).use(Tabs);
    export default {
        name: 'testForm',
        data() {
            return {
                active: 0
            }
        },
        computed: {},
        watch: {},
        methods: {},
        components: {TestTable}
    }
</script>

<style scoped>

</style>