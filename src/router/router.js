/**
 * 路由配置
 */
import Router from 'vue-router';

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "group-home" */ '@/view/index.vue'),
    },
  ],
});
export default router;
