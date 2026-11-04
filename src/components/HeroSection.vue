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
      <div class="baseline-inner">
        <p class="support">
          Full stack developer — Laravel & Vue. Membangun ERP dan sistem bisnis
          dari database sampai antarmuka.
        </p>
        <a class="secondary" href="#pengalaman">Lihat pengalaman ↓</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: clamp(88px, 10vh, 160px);
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
  border: 1px solid rgba(2, 132, 199, 0.45);
  border-radius: 999px;
  transition: background 0.2s ease;
}

.action:hover {
  background: rgba(14, 165, 233, 0.1);
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
  padding-bottom: 6vh;
  display: flex;
  justify-content: flex-end;
}

.baseline-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.support {
  max-width: 300px;
  font-size: var(--step-body);
  line-height: 1.5;
  color: var(--ink-soft);
}

.secondary {
  color: var(--accent-strong, #0369a1);
  font-weight: 600;
  font-size: var(--step-small);
  text-decoration: none;
  border-bottom: 2px solid var(--accent);
  padding-bottom: 2px;
  transition: border-color 0.2s ease;
}

.secondary:hover {
  border-color: var(--accent-strong, #0369a1);
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
