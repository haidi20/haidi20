<template>
  <section id="kontak" class="contact">
    <p class="label">Kontak</p>
    <a class="row" :href="`mailto:${profileStore.profile.email}`">
      <span class="key">Email</span>
      <span class="val">{{ profileStore.profile.email }}</span>
    </a>
    <a class="row" :href="profileStore.profile.linkedinUrl" target="_blank" rel="noopener">
      <span class="key">LinkedIn</span>
      <span class="val">haidi-nurhadinata</span>
    </a>
    <a class="row" :href="profileStore.profile.githubUrl" target="_blank" rel="noopener">
      <span class="key">GitHub</span>
      <span class="val">haidi20</span>
    </a>
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
  padding: 96px 0 48px;
}

.label {
  color: var(--ink-soft);
  font-size: var(--step-small);
  font-weight: 600;
  margin-bottom: 24px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  padding: 22px 0;
  border-top: 1px solid rgba(148, 163, 184, 0.15);
  text-decoration: none;
  transition: padding-left 0.2s ease;
}

.row:hover {
  padding-left: 12px;
}

.row:hover .val {
  color: var(--accent);
}

.key {
  color: var(--ink-soft);
  font-size: var(--step-small);
}

.val {
  color: var(--ink-pale);
  font-size: var(--step-lead);
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
  overflow-wrap: anywhere;
}

.footer {
  margin-top: 72px;
  color: #475569;
  font-size: var(--step-small);
}

@media (max-width: 560px) {
  .row {
    flex-direction: column;
    gap: 4px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .row, .val {
    transition: none;
  }
}
</style>
