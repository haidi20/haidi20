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
  color-scheme: dark;
  scroll-behavior: smooth;
}

body {
  font-family: 'Schibsted Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  background-color: #0f172a;
  color: #e2e8f0;
  -webkit-font-smoothing: antialiased;
}

:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem);
  --ink-pale: #e2e8f0;
  --ink-soft: #94a3b8;
  --accent: #7dd3fc;
}

::selection {
  background: rgba(125, 211, 252, 0.35);
}

a {
  touch-action: manipulation;
}

a:focus-visible {
  outline: 2px solid #7dd3fc;
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
  background: #7dd3fc;
  color: #0f172a;
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
