<template>
  <div :class="$style.div">
    <ListPage />
  </div>
</template>

<script>
import Vue from 'vue'
import ListPage from './components/ListPage.vue';
export default Vue.extend({
  name:'app',
  components:{
    ListPage
  },
  data:()=>({
    text:'这是一个vue的入口程序'
  }),
  mounted:()=>{
    console.log('this')
  }
})
</script>

<style lang="less" module>
  .div{
  }
</style>

