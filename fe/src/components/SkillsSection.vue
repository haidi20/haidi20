<template>
  <section id="keahlian" class="skills" data-reveal>
    <p class="label"><span class="num" aria-hidden="true">02</span>Keahlian</p>
    <ul class="grid">
      <li v-for="(group, i) in profileStore.skills" :key="group.category" class="cell">
        <span class="index" aria-hidden="true">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3>{{ group.category }}</h3>
        <ul class="items">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
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

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.cell {
  padding: clamp(24px, 3.5vw, 44px);
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  transition: background 0.25s ease;
}

.cell:hover {
  background: var(--accent-wash);
}

.index {
  font-family: var(--mono);
  font-size: var(--step-small);
  color: var(--accent);
  font-variant-numeric: tabular-nums;
}

.cell h3 {
  margin: 12px 0 16px;
  font-size: clamp(1.5rem, 1.2rem + 1.4vw, 2.25rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink);
}

.items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.items li {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--ink-soft);
  padding: 6px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: #ffffff;
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cell {
    transition: none;
  }
}
</style>
