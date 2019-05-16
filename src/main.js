import Vue from "vue";
import App from "./App.vue";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.min.css";

import VueGraph from "vue-graph";
Vue.use(VueGraph);

import VueTouchEvents from "vue2-touch-events";
Vue.use(VueTouchEvents);

Vue.use(Vuetify, {
  iconfont: "mdi"
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
