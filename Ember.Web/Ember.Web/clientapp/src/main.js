import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import loader from './utils/Loader';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './styles/styles.css';

Vue.config.productionTip = process.env.NODE_ENV === 'qa' || process.env.NODE_ENV === 'production';

console.log(process.env.NODE_ENV);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');


router.beforeEach((to, from, next) => {
  loader.loaderStart();
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  loader.loaderEnd();
});