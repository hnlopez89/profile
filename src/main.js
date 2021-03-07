import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";
import "../node_modules/timeline-vuejs/dist/timeline-vuejs.css";
import VueSlideoutPanel from "vue2-slideout-panel";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueSlideoutPanel);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
