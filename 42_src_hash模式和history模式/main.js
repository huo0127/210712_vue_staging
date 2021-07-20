import Vue from "vue";
import App from "./App";
//引入
import VueRouter from "vue-router";
//引入路由器
import router from "./router";

Vue.config.productionTip = false; //關閉生產提示
//應用插件
Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router: router,
});
