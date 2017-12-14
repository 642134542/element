import Vue from 'vue';
import Router from 'vue-router';
import vueResource from 'vue-resource';

import goods from 'components/tabs/goods';
import rating from 'components/tabs/rating';
import seller from 'components/tabs/seller';

Vue.use(Router);
Vue.use(vueResource);

const appRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/rating',
      component: rating
    },
    {
      path: '/seller',
      component: seller
    }
  ]
});
export default appRouter;
