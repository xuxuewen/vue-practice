<template>
  <div>
    <h4>组件 ComB</h4>
    <p>count:{{count}}</p>

    <Button type="primary" @click="lessCount">减少Count</Button>
  </div>
</template>
<script>
export default {
  name:'ComB',
  data:function(){
    return {

    }
  },
  computed:{
    count:vm=>{
      return vm.$root.$data.count
    }
  },
  methods:{
    lessCount:function(){
      this.$root.$data.count--;
    }
  },
  mounted:function(){
    console.log(this.$root.$data);
  }  
}
</script>
<style lang="less">

</style>
