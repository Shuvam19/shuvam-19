<template>
  <div class="select">
    <div class="all-project-list">
      <div
        class="individual-project"
        v-for="project in listOfAllProjects"
        :key="project.id"
      >
        <p>{{ project.data["title"] }}</p>
        <p @click="addToFavouraiteProject(project)">Add Project</p>
      </div>
    </div>
    <div class="selected-projects">
      <div
        class="individual-project"
        v-for="project in favouraiteProjects"
        :key="project.id"
      >
        <p>{{ project.data["title"] }}</p>
        <p @click="removeProject(project.id)">Remove Project</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddProjectToFirestore from "../firebase/AddProjectToFirestore";
import deleteDocument from "../firebase/DeleteDocument";
export default {
  computed: {
    ...mapState(["listOfAllProjects", "favouraiteProjects"]),
  },
  methods: {
    addToFavouraiteProject(project) {
      AddProjectToFirestore("favourite-projects", project.data);
    },
    removeProject(id) {
      deleteDocument("favourite-projects", id);
    },
  },
};
</script>

<style scoped>
.select {
  width: 100%;
  height: 30vh;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
}

.all-project-list {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.individual-project {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: #becaeb;
}
.selected-projects {
  width: 30%;
}
</style>