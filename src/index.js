/**
 * 入口
 */
import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import routerConfig from '@/router/router';
import store from '@/store';

// console.log(pree);
// 挂载属性
Vue.use(Router);

new Vue({
  router: routerConfig,
  store,
  render: (h) => h(App),
}).$mount('#root');
