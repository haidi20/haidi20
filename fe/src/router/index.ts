import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
