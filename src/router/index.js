import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/main/home';
import Program from '../components/main/program';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/home', component: Home },
    { path: '/program', component: Program },
    { path: '/', redirect: '/home' },
  ],
});
