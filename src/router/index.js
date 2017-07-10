import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import goods from '@/components/goods/goods.vue';
import ratings from '@/components/ratings/ratings.vue';
import seller from '@/components/seller/seller.vue';
import count from '@/components/Count.vue';

import '../common/stylus/index.styl';

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/rating',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/count',
      name: 'count',
      component: count
    }
  ]
});
