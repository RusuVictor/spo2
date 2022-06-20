import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./plugins/api";

// CSS
import "@/scss/main.scss";

import VueModalTor from "vue-modaltor";
Vue.use(VueModalTor);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

import Sortable from "vue-sortable";
Vue.use(Sortable);

import VCalendar from "v-calendar";
Vue.use(VCalendar, {
  locales: {
    "ru-RU": {
      firstDayOfWeek: 2
    }
  }
});

Vue.use(api)

Vue.config.productionTip = false;

const validationModel = (v, target, name) => {
  v[name].$model = target.value;
};

window.validationModel = validationModel;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
