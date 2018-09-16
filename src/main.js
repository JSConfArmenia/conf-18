// Styles
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(vueSmoothScroll);

new Vue({
  render: h => h(App),
}).$mount('#app');
