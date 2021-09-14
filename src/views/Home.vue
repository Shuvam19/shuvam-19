<template>
  <div class="home">
    <about />
  </div>
</template>

<script>
import About from "../components/about/About.vue";
export default {
  name: "Home",
  components: {
    About,
  },
};
</script>

<style scoped>
.home {
  height: 120vh;
}
</style>
