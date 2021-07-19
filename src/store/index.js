//該文件用於創建Vuex中最核心的store

import Vue from "vue";
//引入Vuex
import Vuex from "vuex";
import countOptions from "./count";
import personOptions from "./person";
//使用Vuex插件
Vue.use(Vuex);

//創建並store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});
