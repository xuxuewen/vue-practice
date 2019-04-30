<template>
  <div>
    <h4>组件 ComA</h4>
    <p>count:{{count}}</p>

    <Button type="primary" @click="addCount">增加Count</Button>
  </div>
</template>
<script>
export default {
  name:'ComA',
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
    addCount:function(){
      this.$root.$data.count++;
    }
  },
  mounted:function(){
    console.log(this.$root.$data);
  }  
}
</script>
<style lang="less">

</style>
