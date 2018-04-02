import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const modules = [];
modules.push(require('./apps/demo/route').name);
modules.push(require('./apps/homeList/route').name);
export default new Router({
  routes: [
    {
      path: '/czy',
      name: 'czy',
      component: {template: '<router-view></router-view>'},
      redirect: {name: 'czy-homeList'},
      children: modules
    },
    {
      path: '/*',
      redirect: '/homeList'
    }
  ]
})
