<template>
  <div class="hello">
    <van-button type="default">默认按钮</van-button>
    -<h1>{{ indexMsg }}</h1>-
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    // import Vue from 'vue';
    // import { Button } from 'vant';
  // Vue.use(button);
export default {
  name: 'HelloWorld',
    computed: {
        ...mapState({
            indexMsg:state=>state.testH5.indexMsg

        })
    },
  props: {
    msg: String
  },
  mounted(){
      this.$store.commit('setIndexMsg','hi')

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
