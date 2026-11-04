<template>
  <section id="tentang" class="about">
    <div class="row">
      <dl class="facts">
        <div class="fact">
          <dt>Basis</dt>
          <dd>Samarinda, Kaltim</dd>
        </div>
        <div class="fact">
          <dt>Fokus</dt>
          <dd>ERP & sistem bisnis</dd>
        </div>
        <div class="fact">
          <dt>Pendidikan</dt>
          <dd>Politeknik Negeri Samarinda</dd>
        </div>
      </dl>
      <p class="lead">{{ profileStore.profile.about }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.about {
  padding: 120px 0;
}

.row {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 48px;
  border-left: 1px solid rgba(2, 132, 199, 0.25);
  padding-left: clamp(24px, 4vw, 64px);
}

.facts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
}

.fact dt {
  color: var(--ink-soft);
  font-size: var(--step-small);
}

.fact dd {
  margin: 2px 0 0;
  color: var(--ink-pale);
  font-size: var(--step-small);
  font-weight: 600;
}

.lead {
  margin: 0;
  font-size: clamp(20px, 1.7vw, 26px);
  line-height: 1.35;
  color: var(--ink-pale);
  text-wrap: pretty;
}

@media (max-width: 720px) {
  .about {
    padding: 80px 0;
  }
  .row {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .facts {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
  }
}
</style>
