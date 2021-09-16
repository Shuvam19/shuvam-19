<template>
  <div class="home">
    <about />
    <project-section />
  </div>
</template>

<script>
import About from "../components/about/About.vue";
import ProjectSection from "../components/projects/ProjectSection.vue"
export default {
  name: "Home",
  components: {
    About,
    ProjectSection,
  },
};
</script>

<style scoped>
</style>
