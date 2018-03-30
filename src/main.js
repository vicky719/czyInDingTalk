import Vue from 'vue'
import czyHome from './App'
import router from './routes'

import components from './components.js';

Vue.config.productionTip = false;
Vue.use(components);

window._bus = new Vue({
  el: '#app',
  router,
  components: { czyHome },
  template: '<czyHome/>'
});
