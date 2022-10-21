import Vue from 'vue';
import App from './App.vue';
import FooterComp from './components/FooterComp.vue';
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

library.add(faUserSecret, faGithub, faTelegram);
Vue.component('font-awesome-icon', FontAwesomeIcon);
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { App, FooterComp },
  template: '<App/>',
  vuetify,
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount('#app');
