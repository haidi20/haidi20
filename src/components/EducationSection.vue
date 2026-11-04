<template>
  <section class="education">
    <SectionTitle index="04" title="Pendidikan" />
    <div class="item">
      <h3>{{ profileStore.education.school }}</h3>
      <p>{{ profileStore.education.degree }} · {{ profileStore.education.period }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';
import SectionTitle from './SectionTitle.vue';

const profileStore = useProfileStore();
</script>

<style scoped>
.education {
  padding: 72px 0;
}

.item {
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 14px;
  padding: 24px;
  background: rgba(148, 163, 184, 0.04);
}

.item h3 {
  color: #f1f5f9;
  font-size: 1.05rem;
}

.item p {
  color: #94a3b8;
  margin-top: 6px;
  font-size: 0.92rem;
}
</style>
