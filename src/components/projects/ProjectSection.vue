<template>
  <div id="project">
    <p class="project-header">Projects</p>
    <router-link class="see-all-project" to="/all-projects"
      >see all projects</router-link
    >
    <div class="famous-project">
      <project-individual />
      <project-individual />
      <project-individual />
      <project-individual />
      <project-individual />
      <project-individual />
      <project-individual />
      <project-individual />
      <project-individual />
    </div>
  </div>
</template>

<script>
import ProjectIndividual from "./ProjectIndividual.vue";
export default {
  name: "ProjectSection",
  components: {
    ProjectIndividual,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#project {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project-header {
  font-size: 2vw;
  font-weight: 600;
  font-family: sans-serif;
  color: #becaeb;
}

.see-all-project {
  font-size: 15px;
  color: #64ffda;
  text-decoration: none;
  font-family: monospace;
}

.famous-project {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}
</style>