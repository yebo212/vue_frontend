import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import "./css/style.css";
import AppComponent from "./component/App.vue";
import Filters from "./filter";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import storeConfig from "./store";

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Filters);
Vue.use(Vuex);

import router from "./router";
import axios from "./js/axios_config.js";
import api from "./js/api_config.js";
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

new Vue({
    el: "#app",
    render: c => c(AppComponent),
    router,
    store: new Vuex.Store(storeConfig)
});