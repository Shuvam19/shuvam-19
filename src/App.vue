<template>
  <navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";
import Footer from "./components/footer/Footer.vue"
import getProjects from './components/firebase/getAllProjects';
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  mounted() {
    getProjects();
  }
};
</script>

<style>
body {
  background-color: #0a192f;
}
</style>
