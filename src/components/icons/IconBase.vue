<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    @mouseenter="iconColor = hoverColor"
    @mouseleave="iconColor = color"
    class="svg-icon"
  >
    <g :fill="iconColor">
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
      default: "currentColor",
    },
    hoverColor: {
      type: String,
      default: "currentColor",
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