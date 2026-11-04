<template>
  <section class="skills">
    <SectionTitle index="02" title="Keahlian" />
    <div class="grid">
      <article v-for="group in profileStore.skills" :key="group.category" class="card">
        <h3>{{ group.category }}</h3>
        <ul>
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';
import SectionTitle from './SectionTitle.vue';

const profileStore = useProfileStore();
</script>

<style scoped>
.skills {
  padding: 72px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.card {
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 14px;
  padding: 22px;
  background: rgba(148, 163, 184, 0.04);
  transition: border-color 0.2s ease, transform 0.15s ease;
}

.card:hover {
  border-color: rgba(125, 211, 252, 0.4);
  transform: translateY(-2px);
}

.card h3 {
  color: #f1f5f9;
  font-size: 1rem;
  margin-bottom: 12px;
}

.card ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card li {
  color: #94a3b8;
  font-size: 0.82rem;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(125, 211, 252, 0.07);
  border: 1px solid rgba(125, 211, 252, 0.15);
}

@media (prefers-reduced-motion: reduce) {
  .card { transition: none; }
}
</style>
