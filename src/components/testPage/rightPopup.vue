<template>
    <div id="right-popup">
        <van-cell-group>
            <van-collapse value="1" accordion>
                <van-collapse-item title="附近船舶" name="1">
                    <van-radio-group v-model="radioSelect">
                        <van-cell v-for="item in radioData" :title="item.value" :border="false">
                   <span class="inlineBlock">
                       <van-radio :name="item.value"/>
                   </span>
                        </van-cell>
                    </van-radio-group>
                </van-collapse-item>
            </van-collapse>
        </van-cell-group>
        <van-cell-group>
            <van-collapse value="1" accordion>
                <van-collapse-item title="退回原因" name="1">
                    <van-checkbox-group v-model="checkBoxSelect">
                        <van-cell v-for="item in checkBoxData" :title="item.value" :border="false">
                        <span class="inlineBlock">
                          <van-checkbox :key="item.key" :name="item.key"/>
                        </span>
                        </van-cell>
                    </van-checkbox-group>
                </van-collapse-item>
            </van-collapse>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: 'rightPopup',
        data() {
            return {
                radioSelect: '2km',
                radioData: [
                    {value: '1km', key: '1km'},
                    {value: '2km', key: '2km'},
                    {value: '3km', key: '3km'},
                ],
                checkBoxData: [
                    {value: '任务冲突', key: '1'},
                    {value: '时间繁忙', key: '2'},
                    {value: '距离太远', key: '3'},
                ],
                checkBoxSelect: ['1', '3'],
                radio: '1',
            }
        },
        computed: {},
        watch: {},
        methods: {},
        components: {}
    }
</script>

<style scoped>
    .checkBoxItem {
        position: relative
    }
    .checkBoxItem .van-checkbox {
        display: inline-block;
        padding: 10PX;
        /*position: fixed;*/
    }
</style>