// Styles
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'font-awesome/css/font-awesome.css';
import 'vue-directive-tooltip/css/index.css';

import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll';
import Tooltip from 'vue-directive-tooltip';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(vueSmoothScroll);
Vue.use(Tooltip);

new Vue({
  render: h => h(App),
}).$mount('#app');
