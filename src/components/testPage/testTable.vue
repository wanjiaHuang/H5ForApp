<template>
    <div id="test-table">
        <van-cell :title="item.name" v-for="item in tableData">
            <!-- 使用 title 插槽来自定义标题 -->
            <template slot="label">
                <span class="checkItem">
                    <span class="title">等级:</span>
                    <span class="content" v-if="item.level===1">
                        <van-tag type="danger">必检船</van-tag>
                    </span>
                    <span class="content" v-if="item.level===2">
                        <van-tag type="warning">应检船</van-tag>
                    </span>
                    <span class="content" v-if="item.level===3">
                        <van-tag type="success">可检船</van-tag>
                    </span>
                </span>
                <span class="checkItem">
                     <span class="title">MMSI:</span>
                    <span class="content">{{item.MMSI}}</span>
                </span>
                <span class="checkItem">
                     <span class="title">吨位:</span>
                    <span class="content">{{item.weight}}</span>
                </span>
                <span class="checkItem">
                     <span class="title">检测时间:</span>
                    <span class="content">{{item.time}}</span>
                </span>
                <!--<van-tag type="danger">标签</van-tag>-->
            </template>
        </van-cell>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Tag} from 'vant';

    Vue.use(Tag);
    export default {
        name: 'test-table',
        data() {
            return {
                tableData: [
                    {
                        name: '粤广州货0839',
                        level: 1,
                        MMSI: '413900336',
                        weight: '3000吨',
                        time: '2019.03.26'
                    }, {
                        name: '粤广州货0839',
                        level: 1,
                        MMSI: '413900336',
                        weight: '3000吨',
                        time: '2019.03.26'
                    }, {
                        name: '粤广州货0839',
                        level: 2,
                        MMSI: '413900336',
                        weight: '3000吨',
                        time: '2019.03.26'
                    }, {
                        name: '粤广州货0839',
                        level: 2,
                        MMSI: '413900336',
                        weight: '3000吨',
                        time: '2019.03.26'
                    }, {
                        name: '粤广州货0839',
                        level: 3,
                        MMSI: '413900336',
                        weight: '3000吨',
                        time: '2019.03.26'
                    }, {
                        name: '粤广州货0839',
                        level: 3,
                        MMSI: '413900336',
                        weight: '3000吨',
                        time: '2019.03.26'
                    },
                ]
            }
        },
        computed: {},
        watch: {},
        methods: {},
        components: {}
    }
</script>

<style scoped lang="scss">
    .van-cell__title {
        span {
            font-family: '微软雅黑';
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            text-align: left;
            color: #333333;
        }
        .van-cell__label {
            flex-wrap: wrap;
            .checkItem {
                display: inline-block;
                width: 8rem;

                .title, .content {
                    font-size: 12px;
                    color: rgb(153, 153, 153);
                    line-height: 20px;
                }
            }
        }

    }

</style>