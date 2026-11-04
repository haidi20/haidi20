<template>
  <section class="stats" aria-label="Ringkasan pengalaman" data-reveal>
    <div class="stat">
      <span class="num">5+</span>
      <p>tahun membangun aplikasi web &amp; mobile, dari tambang sampai klinik</p>
    </div>
    <div class="stat">
      <span class="num">4</span>
      <p>bidang: front-end, back-end, mobile, dan devops</p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.stats {
  padding: 96px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 96px);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.num {
  font-size: clamp(4.5rem, 12vw, 9rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 0.85;
  color: var(--ink-pale);
  font-variant-numeric: tabular-nums;
}

.stat p {
  margin: 0;
  color: var(--ink-soft);
  font-size: var(--step-body);
  line-height: 1.5;
  max-width: 30ch;
}

@media (max-width: 640px) {
  .stats {
    grid-template-columns: 1fr;
    padding: 72px 0;
  }
}
</style>
