<template>
  <div class="whole">
    <div class="header">
      <h1 class="modify-project">Modify Project</h1>
      <router-link to="/add-project"> Add Project </router-link>
    </div>
    <div class="project-list">
      <div
        class="project-individual"
        v-for="project in listOfAllProjects"
        :key="project.id"
      >
        <p>{{ project.data["title"] }}</p>
        <p>{{ project.data["year"] }}</p>
        <router-link :to="'/modify-project/' + project.id">
          Modify
        </router-link>
      </div>
    </div>
    <div class="add-favourite">
      <h1 class="favourite-project">Favourite Project</h1>
      <select-favourite-project />
    </div>
    <div class="experience">
      <router-link to="/add-experience"> Add Experience </router-link>
    </div>
    <alert-dialog :isVisible="false"
      >Looks like project is private will keep you notified like project is
      private will keep you</alert-dialog
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
import SelectFavouriteProject from "../components/projects/SelectFavouriteProject.vue";
import AlertDialog from "../components/utils/AlertDialog.vue";
export default {
  components: { SelectFavouriteProject, AlertDialog },
  computed: {
    ...mapState(["listOfAllProjects"]),
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