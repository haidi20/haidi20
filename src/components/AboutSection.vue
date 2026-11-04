<template>
  <section id="tentang" class="about" data-reveal>
    <p class="label"><span class="num" aria-hidden="true">01</span>Tentang</p>
    <p class="lead">{{ profileStore.profile.about }}</p>
    <dl class="facts">
      <div class="fact">
        <dt>Basis</dt>
        <dd>Samarinda, Kaltim</dd>
      </div>
      <div class="fact">
        <dt>Fokus</dt>
        <dd>ERP &amp; sistem bisnis</dd>
      </div>
      <div class="fact">
        <dt>Pendidikan</dt>
        <dd>Politeknik Negeri Samarinda</dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.about {
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

.lead {
  margin: 0 0 48px;
  max-width: 21em;
  font-size: clamp(1.5rem, 1.2rem + 1.6vw, 2.375rem);
  line-height: 1.3;
  letter-spacing: -0.015em;
  color: var(--ink);
  text-wrap: pretty;
}

.facts {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin: 0;
}

.fact {
  background: #ffffff;
  padding: 20px 24px;
}

.fact dt {
  font-family: var(--mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
}

.fact dd {
  margin: 6px 0 0;
  color: var(--ink);
  font-size: var(--step-small);
  font-weight: 600;
}

@media (max-width: 720px) {
  .facts {
    grid-template-columns: 1fr;
  }
}
</style>
