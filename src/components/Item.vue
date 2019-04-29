<template>
  <div :class="$style.page">
    <div :class="$style.img">
      <img :src="img" width="200px"/>
    </div>
    <p><em title="159.00"><b>¥</b>159.00</em></p>
    <p>耐克篮球 nike蓝球成人男女青少年室内外7号水泥地正品耐磨BB0639</p>
    <p :class="$style.action">
      <Button type="primary" size="small" icon="ios-add-circle-outline">加入购物车</Button>
    </p>
  </div>
</template>
<script>
import img from '../dd.jpg';
export default {
  name:'Item',
  props:{
    dataObj:{
      type:Object,
      required:true
    }
  },
  data:()=>({
    text:'item',
    img
  }),
  methods:{

  },
  computed:{

  }
}
</script>
<style lang="less" module>
  .page{
    min-width: 220px;
    border: 1px solid #34efa2;
    text-align: center;
    padding: 10px;
    .img{
      overflow: hidden;
      width: 200px;
      height: 200px;
      img{
        transition: all .4s cubic-bezier(.4,0,.2,1);
      }
    }
    p{
      text-align: left;
      width: 200px;
      em{
        font-family: arial;
        font-weight: 400;
        font-size: 20px;
        color: #ff0036;
        font-style: normal;
      }
    }
    .action{
      margin-top: 10px;
    }
    &:hover{
      cursor: pointer;
      img{
        transform: scale3d(1.5,1.5,1)
      }
    }
  }
</style>
