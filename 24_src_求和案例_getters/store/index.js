//該文件用於創建Vuex中最核心的store

import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
//使用Vuex插件
Vue.use(Vuex);

//準備actions---用於響應組件中的動作
const actions = {
  // jia(context, value) {
  //   console.log("actions中的jia被調用", context, value);
  //   context.commit("JIA", value);
  // },
  // jian(context, value) {
  //   console.log("actions中的jian被調用", context, value);
  //   context.commit("JIAN", value);
  // },
  jiaOdd(context, value) {
    console.log("actions中的jiaOdd被調用", context, value);
    if (context.sum.state % 2) context.commit("JIA", value);
  },
  jiaWait(context, value) {
    console.log("actions中的jiaWait被調用", context, value);
    setTimeout(() => {
      context.commit("JIA", value);
    }, 500);
  },
};
//準備mutations---用於操作數據(state)
const mutations = {
  JIA(state, value) {
    console.log("actions中的jia被調用", state, value);
    state.sum += value;
  },
  JIAN(state, value) {
    console.log("actions中的jian被調用", state, value);
    state.sum -= value;
  },
};
//準備state---用於存儲數據
const state = {
  sum: 0, //當前的值
};
//準備state---用於將state中的數據進行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

//創建並store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
