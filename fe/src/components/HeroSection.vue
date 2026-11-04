<template>
  <section id="top" class="hero">
    <header class="bar">
      <span class="wordmark">hn</span>
      <span class="badge"><span class="dot" aria-hidden="true"></span>Terbuka untuk proyek</span>
      <a class="action" :href="`mailto:${profileStore.profile.email}`">Email saya</a>
    </header>
    <h1>
      <span class="line pale">Haidi</span>
      <span class="line accent">Nurhadinata</span>
    </h1>
    <div class="baseline">
      <p class="support">
        Full stack developer — Laravel &amp; Vue. Membangun ERP dan sistem bisnis
        dari database sampai antarmuka.
      </p>
      <a class="secondary" href="#pengalaman">
        Lihat pengalaman
        <svg class="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 1v11M2.5 7.5 7 12l4.5-4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
    <dl class="meta">
      <div><dt>Peran</dt><dd>{{ profileStore.profile.role }}</dd></div>
      <div><dt>Basis</dt><dd>Samarinda, Kaltim</dd></div>
      <div><dt>Fokus</dt><dd>ERP &amp; sistem bisnis</dd></div>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
</script>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: clamp(72px, 9vh, 128px);
}

.bar {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: clamp(40px, 6vh, 80px);
}

.wordmark {
  font-weight: 800;
  font-size: var(--step-body);
  letter-spacing: -0.02em;
  color: var(--ink);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  color: var(--accent-strong);
  font-family: var(--mono);
  font-size: var(--step-small);
  font-weight: 500;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.18);
}

.action {
  color: var(--accent-strong);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--step-small);
  padding: 12px 22px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.action:hover {
  background: var(--accent-wash);
  border-color: var(--accent);
}

h1 {
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: clamp(44px, 10.5vw, 150px);
  font-weight: 800;
  letter-spacing: -0.05em;
  line-height: 0.9;
  text-transform: lowercase;
  margin: 0;
}

.line.pale {
  color: var(--ink);
}

.line.accent {
  color: var(--accent);
}

.baseline {
  position: relative;
  margin-top: auto;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
}

.support {
  max-width: 420px;
  font-size: var(--step-body);
  line-height: 1.55;
  color: var(--ink-soft);
  text-wrap: pretty;
  margin: 0;
}

.secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-strong);
  font-weight: 600;
  font-size: var(--step-small);
  text-decoration: none;
  border-bottom: 2px solid var(--accent);
  padding-bottom: 3px;
  transition: border-color 0.2s ease, gap 0.2s ease;
}

.secondary:hover {
  border-color: var(--accent-strong);
  gap: 12px;
}

.arrow {
  transition: transform 0.2s ease;
}

.secondary:hover .arrow {
  transform: translateY(2px);
}

.meta {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  gap: 24px;
  margin: 0;
  padding: 20px 0 28px;
  border-top: 1px solid var(--line-strong);
}

.meta dt {
  font-family: var(--mono);
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--ink-soft);
}

.meta dd {
  margin: 4px 0 0;
  color: var(--ink);
  font-size: var(--step-small);
  font-weight: 600;
}

@media (max-width: 640px) {
  .hero {
    padding-top: 96px;
    min-height: auto;
  }
  .badge {
    display: none;
  }
  .support {
    max-width: 100%;
  }
  .meta {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .baseline {
    margin-top: 48px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .action, .secondary, .arrow {
    transition: none;
  }
}
</style>
