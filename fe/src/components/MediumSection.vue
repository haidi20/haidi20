<template>
  <section id="tulisan" class="medium" data-reveal>
    <p class="label"><span class="num" aria-hidden="true">04</span>Tulisan</p>
    <ul class="grid">
      <li v-for="article in articles" :key="article.link" class="card">
        <a :href="article.link" target="_blank" rel="noopener">
          <span class="thumb-wrap">
            <img v-if="article.thumbnail" :src="article.thumbnail" :alt="article.title" loading="lazy" />
            <span v-else class="thumb-fallback" aria-hidden="true">M</span>
          </span>
          <span class="title">{{ article.title }}</span>
          <span class="date">{{ formatDate(article.pubDate) }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import mediumData from '../data/medium.json';

const articles = mediumData;

function formatDate(value: string): string {
  return new Date(value.replace(' ', 'T')).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
</script>

<style scoped>
.medium {
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

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(20px, 3vw, 36px);
}

.card a {
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-decoration: none;
  height: 100%;
}

.thumb-wrap {
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border: 1px solid var(--line);
  background: var(--accent-wash);
}

.thumb-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.card a:hover img {
  transform: scale(1.04);
}

.thumb-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
}

.title {
  color: var(--ink);
  font-size: var(--step-body);
  font-weight: 600;
  line-height: 1.35;
  transition: color 0.2s ease;
}

.card a:hover .title {
  color: var(--accent-strong);
}

.date {
  font-family: var(--mono);
  font-size: var(--step-small);
  color: var(--ink-soft);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .thumb-wrap img, .title {
    transition: none;
  }
}
</style>
