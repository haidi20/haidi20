<template>
  <main class="page">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <ContactSection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import SkillsSection from '../components/SkillsSection.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import EducationSection from '../components/EducationSection.vue';
import ContactSection from '../components/ContactSection.vue';
</script>

<style scoped>
.page {
  max-width: 880px;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
