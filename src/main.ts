// <reference path="@/extensions/three-ext.d.ts" />
// <reference path="@/extensions/number-ext.d.ts" />
// <reference path="@/types/two.js/index.d.ts" />
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueI18n from "vue-i18n";
import i18n from "./i18n";
import "@/extensions/three.extensions";
import "@/extensions/number.extensions";
import { config } from "vuex-module-decorators";
import {firebaseAuth, firebaseFirestore, firebaseStorage} from "./firebase-backend"
Vue.use(VueI18n);



// Allow all .vue components to access Firebase Auth, Firestore, and Storage
// via new instance variables this.$appAuth, this.$appDB, this.$appStorage
Vue.prototype.$appAuth = firebaseAuth;
Vue.prototype.$appDB = firebaseFirestore;
Vue.prototype.$appStorage = firebaseStorage;
Vue.config.productionTip = false;

config.rawError = true;

new Vue({
  i18n,
  provide: {
    // Use dependency injection to provide a mocked renderer during testing
    // renderer
  },
  router,
  store,
  vuetify,
  render: (h: any) => h(App)
}).$mount("#app");
