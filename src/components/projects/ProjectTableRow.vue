<template>
  <tr class="project-table-row">
    <td class="project-date">{{ project["year"] }}</td>
    <td class="project-title">{{ project["title"] }}</td>
    <td class="project-madeAt hidden">{{ project["madeAt"] }}</td>
    <td class="project-tech-stack hidden">{{ allTools }}</td>
    <td class="project-link">
      <div class="linkIcons">
        <project-link-icon :link="project['links']" />
      </div>
    </td>
  </tr>
</template>

<script>
import ProjectLinkIcon from "./ProjectLinkIcon.vue";
export default {
  components: { ProjectLinkIcon },
  props: {
    project: Object,
  },
  computed: {
    allTools() {
      return this.project["tools"].join(" - ");
    },
  },
};
</script>

<style scoped>
tr td {
  padding: 10px;
}
.project-table-row {
  font-size: 18px;
  color: #8892b0;
  font-family: monospace;
}
.project-table-row:hover {
  background-color: #112240;
}
.project-date {
  width: 5%;
  color: #64ffda;
}

.project-title {
  width: 35%;
  color: #becaeb;
  font-weight: 600;
}

.project-madeAt {
  width: 15%;
}

.project-tech-stack {
  width: 35%;
  font-size: 15px;
}

.project-link {
  width: 10%;
}

.linkIcons {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

@media screen and (max-width: 767px) {
  .hidden {
    display: none;
  }
  .project-date,
  .project-link {
    width: 10%;
  }
  .project-title {
    width: 80%;
  }
  .project-tech-stack,
  .project-madeAt {
    width: 0%;
  }
}
</style>