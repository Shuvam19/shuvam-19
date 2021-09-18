<template>
  <div
    class="individual-project"
    @mouseenter="hoveredIn"
    @mouseleave="hoveredOut"
  >
    <div class="project-info">
      <!-- In Testing -->
      <!-- <div class="semi-image">
        <icon-base width="50" height="50">
          <icon-face-book />
        </icon-base>
      </div> -->
      <p class="project-name" :class="hoverColor">Project Name is another</p>
      <br />
      <p class="project-description">
        This is a small description of the Project That shows about the project
        what it's main purpose ans when it will be using in real life.
      </p>
    </div>
    <div class="project-extras">
      <ul class="project-tech-stack">
        <li class="project-tech-name">Vue</li>
        <li class="project-tech-name">React</li>
        <li class="project-tech-name">Firebase</li>
      </ul>
      <ul class="project_link">
        <li class="project-link-icon">
          <a href="#">
            <icon-base :width="24" :height="24">
              <icon-github />
            </icon-base>
          </a>
        </li>
        <li class="project-link-icon">
          <a href="#">
            <icon-base width="24" height="24">
              <icon-code-chef />
            </icon-base>
          </a>
        </li>
        <li class="project-link-icon">
          <a href="#">
            <icon-base width="24" height="24">
              <icon-face-book />
            </icon-base>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconBase from "../icons/IconBase.vue";
import IconGithub from "../icons/IconGithub.vue";
import IconCodeChef from "../icons/IconCodeChef.vue";
import IconFaceBook from "../icons/IconFaceBook.vue";
export default {
  name: "ProjectIndividual",
  components: {
    IconBase,
    IconGithub,
    IconCodeChef,
    IconFaceBook,
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
  justify-content: space-evenly;
}

.project_link {
  width: 30%;
  padding: 5px;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.project-tech-name {
  padding: 3px;
}
</style>