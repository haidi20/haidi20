<template>
  <div
    id="app"
    class="d-flex flex-column align-items-center justify-content-center vh-100 text-center"
    style="margin: 0 auto; max-width: 800px;"
  >
    <img
      src="https://www.php.net/images/logos/php-logo.svg"
      alt="PHP Logo"
      style="width: 200px; height: 200px; border-radius: 50%; object-fit: contain; margin-top: 20px; border: 5px solid skyblue;"
      :class="{ animatedBorder: isAnimating }"
      @mouseover="startAnimation"
      @mouseleave="stopAnimation"
    />

    <!-- Footer -->
    <footer class="mt-auto" style="padding-bottom: 20px;">
      <!-- Tambahkan padding-bottom -->
      <p class="text-secondary mb-0 text-center">© 2025 Haidi Nurhadinata</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      isAnimating: false,
    };
  },
  methods: {
    startAnimation() {
      this.isAnimating = true;
    },
    stopAnimation() {
      this.isAnimating = false;
    },
  },
};
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

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  margin: 0 auto; /* Pusatkan secara horizontal */
  max-width: 800px; /* Batasi lebar konten */
}

footer {
  margin-top: auto; /* Pastikan footer berada di bagian bawah */
  padding-bottom: 20px; /* Beri jarak dengan bagian bawah halaman */
}
</style>
