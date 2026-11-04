<template>
  <section id="top" class="hero">
    <div class="corners">
      <span class="wordmark">hn.</span>
      <a class="action" :href="`mailto:${profileStore.profile.email}`">Email saya</a>
    </div>
    <h1>
      <span class="line pale">Haidi</span>
      <span class="line accent">Nurhadinata</span>
    </h1>
    <div class="baseline">
      <p class="support">
        Full stack developer — Laravel & Vue. Membangun ERP dan sistem bisnis
        dari database sampai antarmuka.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 15%;
}

.corners {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px clamp(20px, 4vw, 48px);
}

.wordmark {
  font-weight: 800;
  font-size: var(--step-body);
  letter-spacing: -0.02em;
  color: var(--ink-pale);
}

.action {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--step-small);
  padding: 12px 22px;
  border: 1px solid rgba(125, 211, 252, 0.4);
  border-radius: 999px;
  transition: background 0.2s ease;
}

.action:hover {
  background: rgba(125, 211, 252, 0.12);
}

h1 {
  display: flex;
  flex-direction: column;
  font-size: clamp(64px, 13vw, 190px);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 0.88;
  text-transform: lowercase;
  margin: 0;
}

.line.pale {
  color: var(--ink-pale);
}

.line.accent {
  color: var(--accent);
}

.baseline {
  margin-top: auto;
  padding-bottom: 10vh;
  display: flex;
  justify-content: flex-end;
}

.support {
  max-width: 300px;
  font-size: var(--step-body);
  line-height: 1.5;
  color: var(--ink-soft);
}

@media (max-width: 640px) {
  .hero {
    padding-top: 22%;
  }
  .support {
    max-width: 85%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .action {
    transition: none;
  }
}
</style>
