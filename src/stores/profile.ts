import { defineStore } from 'pinia';

export interface Profile {
  name: string;
  year: number;
  logoUrl: string;
  logoAlt: string;
}

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {
      name: 'Haidi Nurhadinata',
      year: 2025,
      logoUrl: 'https://www.php.net/images/logos/php-logo.svg',
      logoAlt: 'PHP Logo',
    } as Profile,
    isAnimating: false,
  }),
  actions: {
    startAnimation() {
      this.isAnimating = true;
    },
    stopAnimation() {
      this.isAnimating = false;
    },
  },
});
