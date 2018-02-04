import Vue from 'vue';
import Router from 'vue-router';
import Routed from './Routed.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [{ path: '/routing', component: Routed }],
});
