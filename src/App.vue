<template>
  <div :class="$style.main">

    <!-- 组件A -->
    <ComA />
    <hr />
    <!-- 组件B -->
    <ComB />
  </div>
</template>
<script>
import ComA from './ComA.vue';
import ComB from './ComB.vue';
export default {
  name:'App',
  components:{
    ComA,
    ComB
  },
  data:function(){
    return {

    }
  },
  mounted:function(){
    console.log(this.$root.$data)
  }
}
</script>
<style lang="less" module>
.main{

}
</style>
