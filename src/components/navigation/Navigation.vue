<template>
  <div class="nav-container">
    <div class="nav-logo"></div>
    <div class="nav-links">
      <navigation-items />
    </div>
    <aside class="nav-links-mobile" v-show="navLinksToShow">
      <navigation-items />
    </aside>
    <button class="button-mobile" @click="navLinksToShow = !navLinksToShow">
      Show
    </button>
  </div>
</template>

<script>
import NavigationItems from "./NavigationItems.vue";
export default {
  name: "Navigation",
  components: {
    NavigationItems,
  },
  data() {
    return {
      navLinksToShow: false,
    };
  },
};
</script>

<style scoped>
.nav-container {
  padding: 10px;
  margin: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav-logo {
  background-color: rgb(245, 62, 62);
}

.nav-links {
  display: flex;
  flex-direction: row;
}

.nav-links-mobile {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 50vh;
  background-color: #112240;
  display: none;
}

.button-mobile {
  position: fixed;
  top: 15px;
  right: 15px;
  display: none;
}

@media screen and (max-width: 767px) {
  .nav-links {
    display: none;
  }

  .nav-links-mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .button-mobile {
    display: block;
  }
}
</style>