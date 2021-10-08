<template>
  <div class="nav-container">
    <div class="nav-logo"></div>
    <div class="nav-links">
      <navigation-items />
    </div>
    <transition name="slide-down">
      <aside class="nav-links-mobile" v-show="navLinksToShow">
        <navigation-items />
      </aside>
    </transition>
    <div class="button-mobile" @click="navLinksToShow = !navLinksToShow">
      <div class="ham-burger" :class="navLinksToShow ? 'show' : ''"></div>
    </div>
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
  left: 0px;
  width: 100vw;
  height: 40vh;
  background-color: #112240;
  overflow: hidden;
  display: none;
}

.button-mobile {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  display: none;
}

/* Ham Burger */
.ham-burger {
  width: 30px;
  height: 2px;
  background-color: #64ffda;
  transition: all 0.5s linear;
}

.ham-burger::before,
.ham-burger::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: #64ffda;
  transition: all 0.5s linear;
}

.ham-burger::before {
  transform: translateY(-10px);
}

.ham-burger::after {
  transform: translateY(+10px);
}

.ham-burger.show {
  transform: translateX(-30px);
  background: transparent;
}

/* Animation */
.ham-burger.show::after {
  transform: rotate(-45deg) translate(15px, 15px);
}

.ham-burger.show::before {
  transform: rotate(45deg) translate(15px, -15px);
}

.slide-down-enter-active {
  animation: slide-down-animate 0.5s;
}

.slide-down-leave-active {
  animation: slide-down-animate 0.3s reverse;
}

@keyframes slide-down-animate {
  0% {
    height: 0%;
  }
  100% {
    height: 40vh;
  }
}

/* Media Queries */
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>