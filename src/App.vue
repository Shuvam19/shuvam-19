<template>
  <navigation />
  <router-view />
  <Footer />
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";
import Footer from "./components/footer/Footer.vue"
import getProjects from './components/firebase/getAllProjects';
import getFavouriteProjects from './components/firebase/getAllFavouriteProject';
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  mounted() {
    getProjects();
    getFavouriteProjects();
  }
};
</script>

<style>
body {
  background-color: #0a192f;
}
</style>
