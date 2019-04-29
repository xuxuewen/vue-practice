import Vue from 'vue';
import iView from 'iview';

import App from './App.vue';

import 'iview/dist/styles/iview.css';

Vue.use(iView);

const vm = new Vue({
  el:'#app',
  render: h => h(App)
})

console.log(vm)