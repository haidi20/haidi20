<template>
  <a class="skip-link" href="#konten">Lewati ke konten</a>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
html {
  color-scheme: light;
  scroll-behavior: smooth;
}

body {
  font-family: 'Schibsted Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  background-color: #ffffff;
  color: #1e293b;
  -webkit-font-smoothing: antialiased;
}

:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
  --ink-pale: #1e293b;
  --ink-soft: #64748b;
  --accent: #0ea5e9;
  --accent-strong: #0369a1;
  --accent-wash: #e0f2fe;
  --border-soft: rgba(2, 132, 199, 0.18);
}

::selection {
  background: rgba(14, 165, 233, 0.25);
}

a {
  touch-action: manipulation;
}

a:focus-visible {
  outline: 2px solid #0284c7;
  outline-offset: 3px;
  border-radius: 4px;
}

.skip-link {
  position: absolute;
  left: 16px;
  top: -48px;
  z-index: 50;
  padding: 10px 16px;
  border-radius: 8px;
  background: #0284c7;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  transition: top 0.2s ease;
}

.skip-link:focus-visible {
  top: 12px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  .skip-link {
    transition: none;
  }
}
</style>
