import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';

// https://appdividend.com/2018/12/28/vue-router-tutorial-with-example-how-to-use-routing-in-vuejs/   - Все про роутинги
const routes = [
  { path: '/', name: 'mainHome', component: Home },
  { path: '/home', name: 'home', component: Home },
  { path: '*', component: NotFound, name: 'NotFound' },
];

export default routes;