import Vue from "vue";
import App from "./App.vue";

import { mixin, mixin2 } from "./mixin";

Vue.config.productionTip = false;
//全局混入
Vue.mixin(mixin, mixin2);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
