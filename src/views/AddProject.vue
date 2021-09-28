<template>
  <div class="add-project">
    <div class="title">
      <input
        class="project-title"
        type="text"
        name="Title"
        placeholder="Title"
        v-model="projectInfo.title"
      />
    </div>
    <div class="quick-information">
      <div class="year-and-made">
        <input
          class="project-year"
          type="number"
          placeholder="year"
          v-model="projectInfo.year"
        />
        <input
          class="project-made-at"
          type="text"
          placeholder="Made At"
          v-model="projectInfo.madeAt"
        />
      </div>
      <textarea
        class="project-small-desc"
        placeholder="Small Description"
        v-model="projectInfo.smallDesc"
      />
    </div>
    <div class="description">
      <textarea
        class="project-description"
        placeholder="Description"
        v-model="projectInfo.desc"
      />
    </div>
    <div class="tools">
      <textarea class="project-tools" placeholder="Tools" />
      <div class="common-tools">
        <p class="individual-tool">Vue</p>
        <p class="individual-tool">React</p>
        <p class="individual-tool">Java</p>
        <p class="individual-tool">Android</p>
        <p class="individual-tool">Html</p>
        <p class="individual-tool">Gatsby</p>
      </div>
    </div>
    <div class="links">
      <input
        class="project-links"
        placeholder="Github Link"
        v-model="projectInfo.links.github"
      />
      <input
        class="project-links"
        placeholder="Share Link"
        v-model="projectInfo.links.share"
      />
      <input
        class="project-links"
        placeholder="Play Store Link"
        v-model="projectInfo.links.playStore"
      />
      <input
        class="project-links"
        placeholder="App Store Link"
        v-model="projectInfo.links.appStore"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
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
};
</script>

<style>
.add-project {
  margin: 50px;
  padding: 50px;
  display: flex;
  flex-direction: column;
}

.title {
  width: 40%;
  height: 30px;
  margin: 0px 20px;
  padding: 10px;
}

.project-title {
  width: 100%;
  height: 100%;
  font-family: monospace;
}

.quick-information {
  margin: 20px 0px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.year-and-made {
  margin: 0px 0px 20px 0px;
  display: flex;
  justify-content: space-between;
}

.project-year,
.project-made-at {
  width: 30%;
  height: 25px;
  margin: 0px 20px;
}

.project-small-desc {
  height: 100px;
  width: 80%;
}

.description {
  display: flex;
  padding: 10px;
  height: 200px;
}

.project-description {
  height: 100%;
  width: 100%;
}

.tools {
  display: flex;
  flex-direction: column;
}

.common-tools {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.individual-tool {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #b0bbda;
  color: #b0bbda;
  font-size: 20px;
  font-family: monospace;
}

.individual-tool:hover {
  cursor: pointer;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-links {
  width: 60%;
  margin: 5px;
}
</style>