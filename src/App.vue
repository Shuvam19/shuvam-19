<template>
  <navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";
import Footer from "./components/footer/Footer.vue";
import getProjects from "./components/utils/firebaseUtils/getAllProjects";
import getExperience from "./components/utils/firebaseUtils/getAllExperience";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  mounted() {
    getProjects();
    getExperience();
  },
};
</script>

<style>
body {
  background-color: #0a192f;
}
</style>
