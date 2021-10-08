<template>
  <div id="project">
    <div class="header">
      <p class="project-header">Projects</p>
      <router-link class="see-all-project" to="/all-project">
        see all projects
      </router-link>
    </div>
    <div class="famous-project">
      <template v-for="project in favouraiteProjects" :key="project.id">
        <project-individual :project="project.data" />
      </template>
    </div>
  </div>
</template>

<script>
import ProjectIndividual from "./ProjectIndividual.vue";
import { mapState } from "vuex";
export default {
  name: "ProjectSection",
  components: {
    ProjectIndividual,
  },
  computed: {
    ...mapState(["favouraiteProjects"]),
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

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
}

.project-header {
  font-size: 3vw;
  font-weight: 600;
  font-family: sans-serif;
  color: #becaeb;
}

.see-all-project {
  margin-top: 5px;
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