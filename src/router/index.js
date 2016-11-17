import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/main/home';
import Program from '../components/main/program';
import Discover from '../components/main/discover';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/home', component: Home },
    { path: '/program', component: Program },
    { path: '/discover', component: Discover },
    { path: '/', redirect: '/home' },
  ],
});
