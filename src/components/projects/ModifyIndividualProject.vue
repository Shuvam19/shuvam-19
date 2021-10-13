<template>
  <div class="whole">
    <div class="error" v-if="showError"></div>
    <div class="modify-project" v-else>
      <div class="title">
        <default-input
          class="project-title"
          type="text"
          name="Title"
          placeholder="Title"
          v-model="projectInfo.title"
        />
      </div>
      <div class="show-project">
        <div class="left">
          <div class="quick-information">
            <div class="year-and-made">
              <default-input
                class="project-made-at"
                type="text"
                placeholder="Made At"
                v-model="projectInfo.madeAt"
              />
              <year-drop-dowm class="project-year" v-model="projectInfo.year" />
            </div>
            <default-text-area
              class="project-small-desc"
              v-model="projectInfo.smallDesc"
            />
          </div>
          <div class="description">
            <default-text-area
              class="project-description"
              v-model="projectInfo.desc"
            />
          </div>
        </div>
        <div class="right">
          <div class="upload-images"></div>
          <add-project-tools />
          <div class="links">
            <default-input
              class="project-links"
              placeholder="Github Link"
              v-model="projectInfo.links.github"
            />
            <default-input
              class="project-links"
              placeholder="Share Link"
              v-model="projectInfo.links.share"
            />
            <default-input
              class="project-links"
              placeholder="Play Store Link"
              v-model="projectInfo.links.playStore"
            />
            <default-input
              class="project-links"
              placeholder="App Store Link"
              v-model="projectInfo.links.appStore"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="add-project-button" @click="updateToFireStore">Modify Project</button>
</template>

<script>
import updateDocument from '../utils/firebaseUtils/updateDocument'
import getProjectByID from "../utils/firebaseUtils/getProjectByID";
import AddProjectTools from "../utils/AddProjectTools.vue";
import DefaultInput from "../utils/DefaultInput.vue";
import DefaultTextArea from "../utils/DefaultTextArea.vue";
import YearDropDowm from "../utils/YearDropDowm.vue";
export default {
  components: { YearDropDowm, DefaultInput, DefaultTextArea, AddProjectTools },
  data() {
    return {
      showError: false,
      projectInfo: {
        title: "",
        smallDesc: "",
        year: "",
        madeAt: "",
        desc: "",
        tools: [],
        links: {
          share: "",
          github: "",
          playStore: "",
          appStore: "",
        },
      },
    };
  },
  methods: {
    async fetchProject() {
      this.projectInfo = await getProjectByID(this.$route.params.id);
      if (!this.projectInfo) {
        this.showError = true;
      }
    },
    async updateToFireStore() {
      await updateDocument("all-projects",this.$route.params.id,this.projectInfo);
    }
  },
  mounted() {
    this.fetchProject();
  },
};
</script>

<style scoped>
.title {
  height: 40px;
  margin: 0px 25px;
}

.project-title {
  width: 100%;
  height: 100%;
  font-family: monospace;
  font-size: 20px;
}

.show-project {
  display: flex;
  padding: 0px 15px;
  flex-direction: row;
  justify-content: space-between;
}

.left {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.right {
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
}

.quick-information {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}

.year-and-made {
  display: flex;
  justify-content: flex-start;
}

.project-year {
  width: 30%;
  margin: 0px 20px;
}

.project-made-at {
  width: 30%;
}

.project-small-desc {
  margin: 10px 0px 0px 0px;
  height: 200px;
  width: 100%;
  font-family: monospace;
}

.description {
  display: flex;
  height: 400px;
}

.project-description {
  height: 100%;
  width: 100%;
  font-family: monospace;
}

.upload-images {
  height: 250px;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-links {
  width: 100%;
  margin: 5px;
}

.add-project-button {
  height: 100%;
  background: none;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  border: 1px solid #b0bbda;
  color: #b0bbda;
}

.add-project-button:hover {
  background: #b0bbda;
  color: black;
}
</style>