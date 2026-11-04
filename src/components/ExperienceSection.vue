<template>
  <section class="experience">
    <SectionTitle index="03" title="Pengalaman Kerja" />
    <ol class="timeline">
      <li v-for="exp in profileStore.experiences" :key="exp.company + exp.period" class="item">
        <p class="period">{{ exp.period }}</p>
        <h3>{{ exp.role }} · <span class="company">{{ exp.company }}</span></h3>
        <p class="location">{{ exp.location }}</p>
        <ul>
          <li v-for="line in exp.description" :key="line">{{ line }}</li>
        </ul>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';
import SectionTitle from './SectionTitle.vue';

const profileStore = useProfileStore();
</script>

<style scoped>
.experience {
  padding: 72px 0;
}

.timeline {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.item {
  position: relative;
  padding-left: 28px;
  border-left: 1px solid rgba(148, 163, 184, 0.2);
}

.item::before {
  content: '';
  position: absolute;
  left: -6px;
  top: 6px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #0f172a;
  border: 2px solid #7dd3fc;
}

.period {
  color: #7dd3fc;
  font-family: ui-monospace, monospace;
  font-size: 0.82rem;
  margin-bottom: 8px;
}

.item h3 {
  color: #f1f5f9;
  font-size: 1.05rem;
}

.company {
  color: #94a3b8;
  font-weight: 400;
}

.location {
  color: #64748b;
  font-size: 0.85rem;
  margin: 4px 0 12px;
}

.item ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item li {
  color: #94a3b8;
  font-size: 0.92rem;
  line-height: 1.7;
  padding-left: 18px;
  position: relative;
}

.item li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #7dd3fc;
}
</style>
