import Vue from 'vue';  // Mengimpor Vue untuk Vue 2
import App from './App.vue';
import VueRouter from 'vue-router';

import router from './router'; // Mengimpor router yang sudah Anda buat

Vue.use(VueRouter); // Mendaftarkan VueRouter

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
