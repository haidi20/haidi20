<template>
  <main id="konten" class="page">
    <HeroSection />
    <AboutSection />
    <StatsSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import StatsSection from '../components/StatsSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import EducationSection from '../components/EducationSection.vue';
import ContactSection from '../components/ContactSection.vue';
</script>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
}

section {
  scroll-margin-top: 88px;
}
</style>
