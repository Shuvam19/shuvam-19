<template>
  <about />
  <experience-section />
  <project-section />
</template>

<script>
import About from "../components/about/About.vue";
import ExperienceSection from "../components/experience/ExperienceSection.vue";
import ProjectSection from "../components/projects/ProjectSection.vue";
export default {
  name: "Home",
  components: {
    About,
    ProjectSection,
    ExperienceSection,
  },
};
</script>

<style scoped>
</style>
