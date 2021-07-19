//求和相關的配置
export default {
  namespaced: true,
  actions: {
    jiaOdd(context, value) {
      console.log("actions中的jiaOdd被調用", context, value);
      if (context.state.sum % 2) {
        context.commit("JIA", value);
      }
    },
    jiaWait(context, value) {
      console.log("actions中的jiaWait被調用", context, value);
      setTimeout(() => {
        context.commit("JIA", value);
      }, 500);
    },
  },
  mutations: {
    JIA(state, value) {
      console.log("mutations中的jia被調用", state, value);
      state.sum += value;
    },
    JIAN(state, value) {
      console.log("mutations中的jian被調用", state, value);
      state.sum -= value;
    },
  },
  state: {
    sum: 0, //當前的值
    School: "atguigu",
    subject: "前端",
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
