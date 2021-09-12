<template>
  <template v-for="link in listOfLinks" v-bind:key="link.id">
    <div class="nav-item">
      <router-link class="nav-text" :to="'/' + link.to">{{
        link.name
      }}</router-link>
    </div>
  </template>
</template>

<script>
export default {
  name: "NavigationItems",
  data() {
    return {
      listOfLinks: [
        { id: 1, name: "About", to: "about" },
        { id: 2, name: "Experience", to: "experience" },
        { id: 3, name: "Project", to: "project" },
        { id: 4, name: "Blog", to: "blog" },
        { id: 5, name: "Contact", to: "contact" },
      ],
    };
  },
};
</script>

<style scoped>
.nav-item {
  padding: 0px 10px;
}

.nav-text {
  font-size: 15px;
  color: #b0bbda;
  text-decoration: none;
  font-family: monospace;
}

.nav-text:hover {
  color: #64ffda;
}

@media screen and (max-width: 767px) {
    .nav-text {
        font-size: 3.5vh;
    }
}
</style>