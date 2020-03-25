import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Data from '@/components/Data';
import CekResiko from '@/components/CekResiko';
import CegahKebakaran from '@/components/CegahKebakaran';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/data',
      name: 'Data',
      component: Data,
    },
    {
      path: '/cek-resiko',
      name: 'CekResiko',
      component: CekResiko,
    },
    {
      path: '/cegah-kebakaran',
      name: 'CegahKebakaran',
      component: CegahKebakaran,
    },
  ],
});
