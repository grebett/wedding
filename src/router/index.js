import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/main/home';
import Program from '../components/main/program';
import Discover from '../components/main/discover';
import Organize from '../components/main/organize';
import Photos from '../components/main/photos';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/accueil', component: Home },
    { path: '/programme', component: Program },
    { path: '/découvrir', component: Discover },
    { path: '/organisation', component: Organize },
    { path: '/photos', component: Photos },
    { path: '/', redirect: '/home' },
  ],
});
