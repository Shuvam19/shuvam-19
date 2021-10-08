<template>
  <div class="all-projects">
    <p class="all-projects-title">All Projects</p>
    <table class="project-table">
      <thead class="project-table-head">
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th class="hidden">MadeAt</th>
          <th class="hidden">Built With</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="project in listOfAllProjects" :key="project.id">
          <project-table-row :project="project.data" />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProjectTableRow from "../components/projects/ProjectTableRow.vue";
export default {
  components: { ProjectTableRow },
  name: "AllProject",
  computed: {
    ...mapState(["listOfAllProjects"]),
  },
};
</script>

<style scoped>
tr th {
  padding: 10px;
}
.all-projects {
  min-width: 80vh;
  padding: 50px;
}

.all-projects-title {
  font-size: 4vw;
  font-weight: 700;
  font-family: sans-serif;
  color: #becaeb;
}

.project-table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}

.project-table-head {
  color: #becaeb;
  font-family: monospace;
  font-size: 18px;
  font-weight: 500;
}

@media screen and (max-width: 767px) {
  .hidden {
    display: none;
  }
}
</style>