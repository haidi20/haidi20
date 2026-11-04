<template>
  <section class="contact">
    <SectionTitle index="05" title="Kontak" />
    <p>Saya terbuka untuk diskusi project, kerja sama, atau peluang kerja.</p>
    <div class="actions">
      <a class="primary" :href="`mailto:${profileStore.profile.email}`">Email Saya</a>
      <a :href="profileStore.profile.linkedinUrl" target="_blank" rel="noopener">LinkedIn</a>
      <a :href="profileStore.profile.githubUrl" target="_blank" rel="noopener">GitHub</a>
    </div>
    <footer class="footer">© {{ year }} {{ profileStore.profile.name }}</footer>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '../stores/profile';
import SectionTitle from './SectionTitle.vue';

const profileStore = useProfileStore();
const year = new Date().getFullYear();
</script>

<style scoped>
.contact {
  padding: 72px 0 48px;
}

.contact > p {
  color: #94a3b8;
  margin-bottom: 24px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.actions a {
  color: #7dd3fc;
  text-decoration: none;
  font-size: 0.92rem;
  padding: 10px 20px;
  border: 1px solid rgba(125, 211, 252, 0.3);
  border-radius: 10px;
  transition: background 0.2s ease, transform 0.15s ease;
}

.actions a.primary {
  background: rgba(125, 211, 252, 0.12);
}

.actions a:hover {
  background: rgba(125, 211, 252, 0.18);
  transform: translateY(-2px);
}

.footer {
  margin-top: 56px;
  color: #475569;
  font-size: 0.82rem;
}

@media (prefers-reduced-motion: reduce) {
  .actions a { transition: none; }
}
</style>
