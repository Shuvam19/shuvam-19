<template>
  <div class="footer" v-show="false">
    <div></div>
    <div class="external-links">
      <template v-for="link in listOfLinks" :key="link.id">
        <a :href="link.to">{{ link.name }}</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      listOfLinks: [
        {
          id: 1,
          name: "Github",
          to: "https://github.com/Shuvam19",
        },
        {
          id: 2,
          name: "Codechef",
          to: "https://www.codechef.com/users/shuvam19",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.external-links {
      height: 10%;
      width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>