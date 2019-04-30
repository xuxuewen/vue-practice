import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    name:'iam state'
  },
  mutations:{
    // 只能这里可以修改state
    // 
    // setter state
  },
  getters:{
    // 
    getName:(state, getters)=>{
      return state.name;
    }
  },
  // actions:{
  //   update
  // }
})

export default store;