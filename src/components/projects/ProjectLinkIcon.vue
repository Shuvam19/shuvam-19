<template>
  <a :href="link['share']" v-if="link['share']" target="__blank">
    <icon-base :width="28" :height="28">
      <icon-share />
    </icon-base>
  </a>
  <a :href="link['github']" v-if="link['github']" target="__blank">
    <icon-base :width="24" :height="24">
      <icon-github />
    </icon-base>
  </a>
  <a :href="link['playStore']" v-if="link['playStore']" target="__blank">
    <icon-base :width="24" :height="24">
      <!-- Need To Add PlayStore Icon -->
    </icon-base>
  </a>
  <a :href="link['appStore']" v-if="link['appStore']" target="__blank">
    <icon-base :width="24" :height="24">
      <!-- Need To Add App Store Icon -->
    </icon-base>
  </a>
</template>

<script>
import IconBase from "../../assets/icons/IconBase.vue";
import IconGithub from "../../assets/icons/IconGithub.vue";
import IconShare from "../../assets/icons/IconShare.vue";

export default {
  components: { IconBase, IconGithub, IconShare },
  props: {
    link: Object,
  },
};
</script>

<style>
</style>