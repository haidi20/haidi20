<template>
  <section id="pengalaman" class="experience" data-reveal>
    <p class="label"><span class="num" aria-hidden="true">03</span>Pengalaman</p>
    <ul class="list">
      <li v-for="exp in profileStore.experiences" :key="exp.company" class="row">
        <div class="body">
          <h3>{{ exp.role }}</h3>
          <p class="meta">{{ exp.company }} — {{ exp.location }}</p>
          <ul>
            <li v-for="line in exp.description" :key="line">{{ line }}</li>
          </ul>
        </div>
        <p class="period">{{ exp.period }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.experience {
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

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: clamp(16px, 3vw, 40px);
  padding: clamp(28px, 4vw, 44px) 0;
  border-top: 1px solid var(--line);
  transition: background 0.25s ease;
}

.row:hover {
  background: linear-gradient(to right, var(--accent-wash), transparent 65%);
}

.body h3 {
  font-size: var(--step-head);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink);
  margin: 0 0 10px;
}

.meta {
  color: var(--ink-soft);
  font-size: var(--step-body);
  margin: 0 0 16px;
}

.body ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 640px;
}

.body li {
  color: var(--ink-soft);
  font-size: var(--step-small);
  line-height: 1.6;
}

.period {
  font-family: var(--mono);
  font-size: var(--step-small);
  color: var(--ink-soft);
  white-space: nowrap;
  padding-top: 8px;
  margin: 0;
  font-variant-numeric: tabular-nums;
}

@media (max-width: 720px) {
  .row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .period {
    padding-top: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .row {
    transition: none;
  }
}
</style>
