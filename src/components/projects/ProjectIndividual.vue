<template>
  <div class="individual-project">
    <div class="project-info">
      <h4 class="project-name">
        Project Name is another thing that could be very long
      </h4>
      <br />
      <p class="project-description">
        This is a small description of the Project That shows about the project
        what it's main purpose ans when it will be using in real life.
      </p>
    </div>
    <div class="project-extras">
      <ul class="project-tech-stack">
        <li class="project-tech-name">TechStack</li>
        <li class="project-tech-name">TechStack</li>
        <li class="project-tech-name">TechStack</li>
      </ul>
      <ul class="project_link">
        <li class="project-link-icon">
          <a href="#">
            <icon-base
              :color="color"
              :hoverColor="hoverColor"
              :width="24"
              :height="24"
            >
              <icon-github />
            </icon-base>
          </a>
        </li>
        <li class="project-link-icon">
          <a href="#">
            <icon-base
              :color="color"
              :hoverColor="hoverColor"
              :width="24"
              :height="24"
            >
              <icon-code-chef />
            </icon-base>
          </a>
        </li>
        <li class="project-link-icon">
          <a href="#">
            <icon-base
              :width="24"
              :height="24"
            >
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
    IconFaceBook
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.individual-project {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #112240;
  border-radius: 5px;
  margin: 5px;
  padding: 20px;
}
.project-name {
  width: 100%;
  font-size: 20px;
  font-weight: 1000;
  font-family: "Open Sans", sans-serif;
}

.project-description {
  width: 100%;
}

.project-extras {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: monospace;
}

.project-tech-stack {
  width: 70%;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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