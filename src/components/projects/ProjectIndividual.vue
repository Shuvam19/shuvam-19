<template>
  <div
    class="individual-project"
    @mouseenter="hoveredIn"
    @mouseleave="hoveredOut"
  >
    <div class="project-info">
      <p class="project-name" :class="hoverColor">{{ project["title"] }}</p>
      <br />
      <p class="project-description">
        {{ project["smallDesc"] }}
      </p>
    </div>
    <div class="project-extras">
      <ul class="project-tech-stack">
        <li
          class="project-tech-name"
          v-for="tech in project['tools']"
          :key="tech"
        >
          {{ tech }}
        </li>
      </ul>
      <div class="project_link">
        <project-link-icon :link="project['links']" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectLinkIcon from "./ProjectLinkIcon.vue";
export default {
  name: "ProjectIndividual",
  props: {
    project: Object,
  },
  components: {
    ProjectLinkIcon,
  },
  data() {
    return {
      hoverColor: "",
    };
  },
  methods: {
    hoveredIn() {
      this.hoverColor = "hover-color";
    },
    hoveredOut() {
      this.hoverColor = "";
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.individual-project {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #112240;
  border-radius: 5px;
  margin: 5px;
  padding: 20px;
  color: #becaeb;
}

.project-name {
  width: 100%;
  font-size: 20px;
  font-weight: 1000;
  font-family: "Open Sans", sans-serif;
}

.hover-color {
  color: #64ffda;
}

.project-description {
  width: 100%;
  font-family: monospace;
}

.project-extras {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: monospace;
  align-items: center;
}

.project-tech-stack {
  width: 70%;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
}

.project_link {
  width: 30%;
  padding: 5px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tech-name {
  padding: 3px;
}
</style>