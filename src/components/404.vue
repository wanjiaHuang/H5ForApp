/*404页面*/
<template>
    <div id="notFound">
        <div class="notFound-layer allPageBox">
            <van-nav-bar title="现场检查" left-arrow/>
            <img src="../assets/images/notFoundIcon.png" class="allPageImage"/>
        </div>
    </div>
</template>

<script>
    import {pageHeight} from '../styles/variables.scss'

    export default {
        name: 'notFound',
        data() {
            return {}
        },
        computed: {},
        watch: {},
        mounted() {
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    @import "../styles/variables.scss";

    .allPageImage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .allPageBox {
        position: absolute;
    }
</style>