<template>
  <section id="pengalaman" class="experience">
    <p class="label">Pengalaman</p>
    <ol class="spines">
      <li v-for="(exp, i) in profileStore.experiences" :key="exp.company" class="spine">
        <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
        <div class="body">
          <h3>{{ exp.role }}</h3>
          <p class="meta">{{ exp.company }} — {{ exp.location }}</p>
          <p class="period">{{ exp.period }}</p>
          <ul>
            <li v-for="line in exp.description" :key="line">{{ line }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.experience {
  padding: 96px 0;
}

.label {
  color: var(--ink-soft);
  font-size: var(--step-small);
  font-weight: 600;
  margin-bottom: 32px;
}

.spines {
  list-style: none;
  margin: 0;
  padding: 0;
}

.spine {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 24px;
  padding: 32px 0;
  border-top: 1px solid rgba(148, 163, 184, 0.15);
}

.num {
  font-family: ui-monospace, monospace;
  color: var(--accent);
  font-size: var(--step-small);
  padding-top: 6px;
  font-variant-numeric: tabular-nums;
}

.spine h3 {
  font-size: var(--step-head);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--ink-pale);
  margin: 0 0 10px;
}

.meta {
  color: var(--ink-soft);
  font-size: var(--step-body);
  margin: 0 0 4px;
}

.period {
  color: var(--ink-soft);
  font-size: var(--step-small);
  font-variant-numeric: tabular-nums;
  margin: 0 0 16px;
}

.spine ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 640px;
}

.spine li {
  color: var(--ink-soft);
  font-size: var(--step-small);
  line-height: 1.6;
}

@media (max-width: 640px) {
  .spine {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
