import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router/index'; // Mengimpor routes dari src/router/index.js

// Menggunakan VueRouter dengan Vue 2
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router, // Menambahkan router ke instance Vue
}).$mount('#app');
