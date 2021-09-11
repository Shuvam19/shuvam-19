<template>
  <navigation />
  <router-view />
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";
export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
body {
  background-color: #0a192f;
}
</style>
