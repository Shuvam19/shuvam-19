<template>
  <div class="individual-experience">
    <p class="experience-position">{{ experience["positon"] }}</p>
    <p class="experience-company">
      @
      <a
        class="experience-company-website"
        :href="experience['companyWebsite']"
        target="__blank"
      >
        {{ experience["companyName"] }}
      </a>
    </p>
    <p class="experience-timeline">
      {{ experience["from"] }} - {{ experience["to"] }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    experience: Object,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.individual-experience {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #112240;
  border-radius: 5px;
  margin: 5px;
  padding: 20px;
  color: #becaeb;
  transition: all 0.3s linear;
  font-size: 15px;
  font-weight: 800;
  font-family: monospace;
}

.individual-experience:hover {
  transform: scale(1.05);
}

.experience-company-website {
  text-decoration: none;
  color: #64ffda;
}

.experience-company-website:hover {
  text-decoration: underline;
}
</style>