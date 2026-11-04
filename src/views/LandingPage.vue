<template>
  <div
    class="landing d-flex flex-column align-items-center justify-content-center vh-100 text-center"
    style="margin: 0 auto; max-width: 800px;"
  >
    <img
      :src="profileStore.profile.logoUrl"
      :alt="profileStore.profile.logoAlt"
      style="width: 200px; height: 200px; border-radius: 50%; object-fit: contain; margin-top: 20px; border: 5px solid skyblue;"
      :class="{ animatedBorder: profileStore.isAnimating }"
      @mouseover="profileStore.startAnimation()"
      @mouseleave="profileStore.stopAnimation()"
    />

    <footer class="mt-auto" style="padding-bottom: 20px;">
      <p class="text-secondary mb-0 text-center">© {{ profileStore.profile.year }} {{ profileStore.profile.name }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.animatedBorder {
  animation: borderPulse 1.5s infinite;
}

@keyframes borderPulse {
  0% {
    border-color: skyblue;
  }
  50% {
    border-color: lightgreen;
  }
  100% {
    border-color: skyblue;
  }
}

.landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}

footer {
  margin-top: auto;
  padding-bottom: 20px;
}
</style>
