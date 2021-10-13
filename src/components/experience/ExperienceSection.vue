<template>
  <div id="experience">
    <div class="experience-header">
      <p class="experience-header-text">Experience</p>
    </div>
    <div class="experience-body">
      <template v-for="experience in listOfExperience" :key="experience.id">
        <experience-individual :experience="experience.data" />
      </template>
    </div>
  </div>
</template>

<script>
import ExperienceIndividual from "./ExperienceIndividual.vue";
import { mapState } from "vuex";
export default {
  components: { ExperienceIndividual },
  computed: {
    ...mapState(["listOfExperience"]),
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#experience {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.experience-header {
  padding: 30px;
}

.experience-header-text {
  font-size: 3vw;
  font-weight: 600;
  font-family: sans-serif;
  color: #becaeb;
}

.experience-body {
  width: 80%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 0.8fr));
  gap: 15px;
}
</style>