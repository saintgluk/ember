// import Home from './pages/Home.vue';
// import NotFound from './pages/NotFound.vue';

// // https://appdividend.com/2018/12/28/vue-router-tutorial-with-example-how-to-use-routing-in-vuejs/   - Все про роутинги
// const routes = [
//   { path: '/', name: 'mainHome', component: Home },
//   { path: '/home', name: 'home', component: Home },
//   { path: '*', component: NotFound, name: 'NotFound' },
// ];

// export default routes;

import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './pages/home/HomePage.vue';
import LoginPage from './pages/login/LoginPage';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});