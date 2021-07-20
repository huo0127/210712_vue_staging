import Vue from "vue";
import App from "./App";

//完整引入
//引入ElementUI組件庫
// import ElementUI from "element-ui";
//引入ElementUI全部樣式
// import "element-ui/lib/theme-chalk/index.css";

import { Button, Row, DatePicker } from "element-ui";

Vue.config.productionTip = false; //關閉生產提示
Vue.component("atguigu-button", Button);
Vue.component("atguigu-row", Row);
Vue.component("atguigu-date-picker", DatePicker);

//應用ElementUI
// Vue.use(ElementUI);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
