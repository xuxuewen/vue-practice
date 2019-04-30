<template>
  <div :class="$style.main">
    <p>{{text}}</p>
    <p>{{test()}}</p>
  </div>
</template>

<script>
export default {
  name:'CustomButton',
  data:function(){
    return {
      text:'custom btn'
    }
  },
  methods:{
    test:function(){
      return this.text +'231'
    }
  },
  computed:{

  },
  watch:{

  },
  mounted:function(){
    console.log(this.$parent)
  }
}
</script>

<style lang="less" module>
.main{
  width: 100px;
  margin: 0 auto;
  border: 1px solid red;
  border-radius: 4px;
}
</style>
