import Vue from 'vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify'

import Loader from './UI/components/Loader';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: '#295077',
    secondary: '#b0bec5',
    accent: '#9dcbfd',
    error: '#ff5959'
  }
});
Vue.component('Loader', Loader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
