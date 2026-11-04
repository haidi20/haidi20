<template>
  <main id="konten" class="page">
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <SkillsSection />
    <ExperienceSection />
    <MediumSection />
    <EducationSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import StatsSection from '../components/StatsSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import MediumSection from '../components/MediumSection.vue';
import EducationSection from '../components/EducationSection.vue';
import ContactSection from '../components/ContactSection.vue';

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('revealed'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
  );
  targets.forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.page [data-reveal] {
  opacity: 0;
  transform: translateY(24px);
}

.page [data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.55s ease,
    transform 0.55s ease;
}

@media (prefers-reduced-motion: reduce) {
  .page [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.page > section:not(:first-of-type) {
  content-visibility: auto;
  contain-intrinsic-size: auto 640px;
}

.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
}

section {
  scroll-margin-top: 88px;
}
</style>
