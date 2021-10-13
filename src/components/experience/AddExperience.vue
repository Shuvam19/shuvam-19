<template>
  <div class="add-experience">
    <div class="experience-title">
      <default-input
        v-model="experience.por"
        placeholder="Position Of Responsibility"
      />
    </div>
    <div class="experience-timeline">
      <default-input
        class="experience-from"
        v-model="experience.from"
        placeholder="from"
      />
      <default-input
        class="experience-to"
        v-model="experience.to"
        placeholder="to"
      />
    </div>
    <div class="experience-company">
      <default-input
        class="experience-company-name"
        v-model="experience.companyName"
        placeholder="Company Name"
      />
      <default-input
        class="experience-company-website"
        v-model="experience.companyWebsite"
        placeholder="Company Website"
      />
    </div>
    <button class="add-experience-button" @click="addToFirestore">
      Add Experience
    </button>
  </div>
</template>

<script>
import AddProjectToFirestore from "../utils/firebaseUtils/AddProjectToFirestore";
import DefaultInput from "../utils/DefaultInput.vue";
export default {
  components: { DefaultInput },
  methods: {
    addToFirestore() {
      AddProjectToFirestore("experience", this.experience);
    },
  },
  data() {
    return {
      experience: {
        positon: "",
        from: "",
        to: "",
        companyName: "",
        companyWebsite: "",
      },
    };
  },
};
</script>

<style scoped>
.add-experience {
  height: 70vh;
  padding: 0px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.experience-title {
  height: 40px;
  width: 40%;
  font-family: monospace;
  font-size: 20px;
}

.experience-timeline {
  width: 35%;
  display: flex;
  gap: 15px;
}

.experience-company {
  width: 55%;
  display: flex;
  gap: 15px;
}

.add-experience-button {
  width: 200px;
  background: none;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  border: 1px solid #b0bbda;
  color: #b0bbda;
}

.add-experience-button:hover {
  background: #b0bbda;
  color: black;
}
</style>