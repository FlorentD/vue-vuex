import Vue from 'vue';
import VueFrom from 'vue-form';
import App from './App.vue';
import router from './router';

Vue.use(VueFrom);

new Vue({ router, ...App }).$mount('#app');
