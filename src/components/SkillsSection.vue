<template>
  <section id="keahlian" class="skills" data-reveal>
    <p class="label">Keahlian</p>
    <ul class="caps">
      <li v-for="group in profileStore.skills" :key="group.category">
        <span class="cap-name">{{ group.category }}</span>
        <span class="cap-items">{{ group.items.join(' · ') }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.skills {
  padding: 96px 0;
}

.label {
  color: var(--ink-soft);
  font-size: var(--step-small);
  font-weight: 600;
  margin-bottom: 32px;
}

.caps {
  list-style: none;
  margin: 0;
  padding: 0;
}

.caps li {
  padding: 20px 0;
  border-top: 1px solid rgba(2, 132, 199, 0.18);
  transition: padding-left 0.2s ease;
}

.caps li:hover {
  padding-left: 12px;
}

.cap-name {
  font-size: clamp(1.8rem, 4.5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink-pale);
}

.cap-items {
  color: var(--ink-soft);
  font-size: var(--step-small);
}

@media (prefers-reduced-motion: reduce) {
  .caps li {
    transition: none;
  }
}
</style>
