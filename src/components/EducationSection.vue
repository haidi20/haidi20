<template>
  <section id="pendidikan" class="education" data-reveal>
    <p class="label">Pendidikan</p>
    <p class="school">{{ profileStore.education.school }}</p>
    <p class="meta">{{ profileStore.education.degree }}</p>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.education {
  padding: 96px 0;
}

.label {
  color: var(--ink-soft);
  font-size: var(--step-small);
  font-weight: 600;
  margin-bottom: 24px;
}

.school {
  font-size: var(--step-head);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink-pale);
  margin: 0 0 10px;
  text-wrap: balance;
}

.meta {
  color: var(--ink-soft);
  font-size: var(--step-body);
  margin: 0;
}
</style>
