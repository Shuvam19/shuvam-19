<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    :width="width"
    :height="height"
    @mouseenter="iconColor = hoverColor"
    @mouseleave="iconColor = color"
    viewBox="0 0 24 24"
    class="svg-icon"
  >
    <!-- need to keep in mind -->
    <!-- :viewBox="getViewBox" -->
    <g :fill="iconColor" :width="width" :height="height">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconBase",
  data() {
    return {
      iconColor: this.color,
    };
  },
  props: {
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    color: {
      type: String,
      default: "#b0bbda",
    },
    hoverColor: {
      type: String,
      default: "#64ffda",
    },
  },
  computed: {
    getViewBox() {
      return "0 0 " + this.width / 2 + " " + this.height / 2;
    },
  },
};
</script>

<style scoped>
.svg-icon {
  transition: all 0.3s ease-in-out;
}

.svg-icon:hover {
  transform: scale(1.1);
}
</style>