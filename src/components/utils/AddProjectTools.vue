<template>
  <div class="tools">
    <default-text-area
      class="project-tools"
      placeholder="Tools"
      v-text="allTools"
    />
    <div class="common-tools">
      <p
        v-for="tool in listOfTools"
        :key="tool"
        class="individual-tool"
        @click="addOrRemoveFromList(tool)"
      >
        {{ tool }}
      </p>
    </div>
  </div>
</template>

<script>
import DefaultTextArea from "./DefaultTextArea.vue";
export default {
  components: { DefaultTextArea },
  emits: ["add", "remove"],
  methods: {
    addOrRemoveFromList(tool) {
      if (this.selectedList.includes(tool)) {
        this.selectedList.splice(this.selectedList.indexOf(tool), 1);
        this.$emit("remove", tool);
      } else {
        this.selectedList.push(tool);
        this.$emit("add", tool);
      }
      console.log(this.selectedList);
    },
  },
  computed: {
    allTools: function () {
      return this.selectedList.join(", ");
    },
  },
  data() {
    return {
      selectedList: [],
      listOfTools: ["React.js", "Vue.js", "Java", "Android", "Html", "Gatsby"],
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.tools {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-tools {
  height: 50px;
  font-family: monospace;
}

.common-tools {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
}

.individual-tool {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #b0bbda;
  color: #b0bbda;
  font-size: 15px;
  font-family: monospace;
}

.individual-tool:hover {
  cursor: pointer;
}
</style>