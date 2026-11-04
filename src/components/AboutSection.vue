<template>
  <section class="about">
    <SectionTitle index="01" title="Tentang Saya" />
    <p>{{ profileStore.profile.about }}</p>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';
import SectionTitle from './SectionTitle.vue';

const profileStore = useProfileStore();
</script>

<style scoped>
.about {
  padding: 72px 0;
}

.about p {
  color: #94a3b8;
  line-height: 1.8;
  max-width: 640px;
}
</style>
