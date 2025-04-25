import Vue from 'vue';
import VueRouter from 'vue-router';  // Perbaiki: Gunakan VueRouter, bukan Router
import LandingPage from '../views/LandingPage.vue';

Vue.use(VueRouter);  // Mendaftarkan VueRouter

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
];

const router = new VueRouter({
  routes,  // Menambahkan rute
});

export default router;  // Mengekspor router secara langsung
