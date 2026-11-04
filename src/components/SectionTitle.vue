<template>
  <h2 class="section-title">
    <span class="index">{{ index }}</span>
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
defineProps<{ index: string; title: string }>();
</script>

<style scoped>
.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.35rem;
  color: #f1f5f9;
  margin-bottom: 28px;
  text-wrap: balance;
}

.index {
  color: #7dd3fc;
  font-family: ui-monospace, monospace;
  font-size: 0.95rem;
}
</style>
