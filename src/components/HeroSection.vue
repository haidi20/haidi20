<template>
  <section class="hero">
    <p class="greeting">Halo, saya</p>
    <h1>{{ profileStore.profile.name }}</h1>
    <p class="role">{{ profileStore.profile.role }} — Laravel & Vue</p>
    <p class="location">{{ profileStore.profile.location }}</p>
    <nav class="links">
      <a :href="profileStore.profile.linkedinUrl" target="_blank" rel="noopener">LinkedIn</a>
      <a :href="profileStore.profile.githubUrl" target="_blank" rel="noopener">GitHub</a>
      <a :href="`mailto:${profileStore.profile.email}`">Email</a>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.hero {
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.greeting {
  color: #7dd3fc;
  font-family: ui-monospace, monospace;
  margin-bottom: 12px;
}

@keyframes rise {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

h1 {
  font-size: clamp(2.6rem, 7vw, 4.2rem);
  line-height: 1.05;
  color: #f8fafc;
  letter-spacing: -0.02em;
  animation: rise 0.6s ease both;
}

.role {
  font-size: clamp(1.15rem, 3vw, 1.5rem);
  color: #94a3b8;
  margin-top: 14px;
  animation: rise 0.6s 0.12s ease both;
}

.location {
  color: #64748b;
  margin-top: 8px;
  animation: rise 0.6s 0.2s ease both;
}

.links {
  display: flex;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;
  animation: rise 0.6s 0.3s ease both;
}

.links a {
  color: #7dd3fc;
  text-decoration: none;
  font-size: 0.92rem;
  padding: 10px 20px;
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 10px;
  transition: background 0.2s ease, transform 0.15s ease;
}

.links a:hover {
  background: rgba(125, 211, 252, 0.1);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  h1, .role, .location, .links { animation: none; }
  .links a { transition: none; }
}
</style>
