<template>
  <div class="whole">
    <div class="header">
      <h1 class="modify-project">Modify Project</h1>
      <router-link to="/add-project"> Add Project </router-link>
    </div>
    <div class="project-list">
      <div
        class="project-individual"
        v-for="project in listOfProjects"
        :key="project.id"
      >
        <p>{{ project.data["title"] }}</p>
        <p>{{ project.data["year"] }}</p>
        <router-link
          :to="'/modify-project/' + project.id"
        >
          Modify
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import allprojects from "../components/firebase/getAllProjects";
export default {
  data() {
    return {
      listOfProjects: [],
    };
  },
  methods: {
    async getProjects() {
      this.listOfProjects = await allprojects();
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<style scoped>
.whole {
  height: 70vh;
  padding: 0px 30px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.modify-project {
  color: #becaeb;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 3vw;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.project-individual {
  color: #becaeb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>