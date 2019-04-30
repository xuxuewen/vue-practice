import Vue from 'vue';
import iView from 'iview';
import App from './App.vue';
import 'iview/dist/styles/iview.css';
import store from './store';

Vue.use(iView);

const GlobalData = {
  count:0
}

const vm = new Vue({
  el:'#app',
  data:GlobalData,
  // store,
  render: h => h(App)
  // created:function(){

  // },
  // mounted:function(){
  //   console.log('sdsd')
  // }
})