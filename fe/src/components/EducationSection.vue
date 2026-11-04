<template>
  <section id="pendidikan" class="education" data-reveal>
    <p class="label"><span class="num" aria-hidden="true">04</span>Pendidikan</p>
    <div class="card">
      <p class="school">{{ profileStore.education.school }}</p>
      <p class="meta">{{ profileStore.education.degree }} — {{ profileStore.education.period }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.education {
  padding: clamp(88px, 12vh, 140px) 0;
}

.label {
  display: flex;
  align-items: baseline;
  gap: 12px;
  font-family: var(--mono);
  font-size: var(--step-small);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
  margin: 0 0 40px;
}

.num {
  color: var(--accent);
}

.card {
  padding: clamp(28px, 4vw, 48px);
  border: 1px solid var(--line-strong);
  background:
    linear-gradient(135deg, var(--accent-wash), transparent 55%);
}

.school {
  font-size: var(--step-head);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink);
  margin: 0 0 10px;
  text-wrap: balance;
}

.meta {
  color: var(--ink-soft);
  font-size: var(--step-body);
  margin: 0;
}
</style>
