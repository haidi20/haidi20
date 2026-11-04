<template>
  <section id="kontak" class="contact" data-reveal>
    <p class="label"><span class="num" aria-hidden="true">05</span>Kontak</p>
    <a class="cta" :href="`mailto:${profileStore.profile.email}`">
      <span class="cta-line">Mari bekerja sama —</span>
      <span class="cta-line accent">kirim email</span>
    </a>
    <ul class="links">
      <li>
        <a :href="profileStore.profile.linkedinUrl" target="_blank" rel="noopener">
          <span class="key">LinkedIn</span>
          <span class="val">haidi-nurhadinata</span>
        </a>
      </li>
      <li>
        <a :href="profileStore.profile.githubUrl" target="_blank" rel="noopener">
          <span class="key">GitHub</span>
          <span class="val">haidi20</span>
        </a>
      </li>
    </ul>
    <footer class="footer">© {{ year }} {{ profileStore.profile.name }}</footer>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';

const profileStore = useProfileStore();
const year = new Date().getFullYear();
</script>

<style scoped>
.contact {
  padding: clamp(88px, 12vh, 140px) 0 48px;
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

.cta {
  display: block;
  text-decoration: none;
  margin-bottom: clamp(48px, 8vh, 88px);
}

.cta-line {
  display: block;
  font-size: clamp(2.25rem, 1.4rem + 5vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.02;
  color: var(--ink);
  transition: color 0.2s ease;
}

.cta-line.accent {
  color: var(--accent);
}

.cta:hover .cta-line {
  color: var(--accent-strong);
}

.cta:hover .cta-line.accent {
  color: var(--ink);
}

.links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.links a {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  padding: 20px 0;
  border-top: 1px solid var(--line);
  text-decoration: none;
  transition: padding-left 0.25s ease, background 0.25s ease;
}

.links a:hover {
  padding-left: 12px;
  background: var(--accent-wash);
}

.key {
  font-family: var(--mono);
  font-size: var(--step-small);
  color: var(--ink-soft);
}

.val {
  color: var(--ink);
  font-size: var(--step-lead);
  font-weight: 600;
  letter-spacing: -0.01em;
  overflow-wrap: anywhere;
}

.footer {
  margin-top: 72px;
  padding-top: 20px;
  border-top: 1px solid var(--line-strong);
  color: #94a3b8;
  font-family: var(--mono);
  font-size: var(--step-small);
}

@media (max-width: 560px) {
  .links a {
    flex-direction: column;
    gap: 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cta-line, .links a {
    transition: none;
  }
}
</style>
