<template>
  <a :href="link['share']" v-if="link['share']" target="__blank">
    <icon-base :width="24" :height="24">
      <!-- Need To Add Share Icon -->
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
import IconBase from "../icons/IconBase.vue";
import IconGithub from "../icons/IconGithub.vue";

export default {
  components: { IconBase, IconGithub },
  props: {
    link: Object,
  },
};
</script>

<style>
</style>