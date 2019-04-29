<template>
<div :class="$style.page">
  <h4>商品列表</h4>
  <div :class="$style.list">
    <template v-for="(item,index) in itemList">
      <Item :dataObj="item" :key="index"/>  
    </template>
  </div>
</div>
</template>

<script>
import Item from './Item.vue';
export default {
  name:'ListPage',
  components:{
    Item
  },
  data:()=>({
    des:'这是列表页面',
    itemList:[
      {
        name:1,
        price:100,
        title:'这是标题'
      },
      {
        name:2,
        price:100,
        title:'这是标题'
      },
      {
        name:3,
        price:100,
        title:'这是标题'
      },
      {
        name:4,
        price:100,
        title:'这是标题'
      },
      {
        name:5,
        price:100,
        title:'这是标题'
      },
      {
        name:6,
        price:100,
        title:'这是标题'
      }
    ]
  })
}
</script>

<style lang="less" module>
.page{
  margin: 0 auto;
  width: 1220px;
  border: 1px solid #ddd;
}
.list{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  &>div{
    margin-bottom: 10px;
  }
}
</style>

