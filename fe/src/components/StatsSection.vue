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
  padding: clamp(48px, 8vh, 88px) 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid var(--line-strong);
  border-bottom: 1px solid var(--line-strong);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: clamp(24px, 4vw, 48px);
}

.stat + .stat {
  border-left: 1px solid var(--line);
}

.num {
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 0.85;
  color: var(--ink);
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
  }
  .stat + .stat {
    border-left: none;
    border-top: 1px solid var(--line);
  }
}
</style>
