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
        v-for="project in listOfAllProjects"
        :key="project.id"
      >
        <template v-if="project.data['isFavorite']">
          <p>{{ project.data["title"] }}</p>
          <p @click="removeProject(project)">Remove Project</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import updateDocument from "../utils/firebaseUtils/updateDocument";
export default {
  computed: {
    ...mapState(["listOfAllProjects"]),
  },
  methods: {
    addToFavouraiteProject(project) {
      project.data["isFavorite"] = true;
      updateDocument("all-projects", project.id, project.data);
    },
    removeProject(project) {
      project.data["isFavorite"] = false;
      updateDocument("all-projects", project.id, project.data);
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