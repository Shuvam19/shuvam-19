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
    <div class="tools"></div>
    <div class="links"></div>
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
</style>