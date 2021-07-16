import Vue from "vue";
import App from "./App";
//引入插件
import VueResource from "vue-resource";
//關閉生產提示
Vue.config.productionTip = false;
//使用插件

Vue.use(VueResource);

new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },

  // components: { App },
  // template: `<App/>`,
});
