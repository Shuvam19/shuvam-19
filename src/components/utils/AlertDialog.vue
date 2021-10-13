<template>
  <teleport to="#alert">
    <div class="alert-dialog"  v-show="isVisible">
      <div class="alert-close">
        <icon-base :width="30" :height="30">
          <icon-close />
        </icon-base>
      </div>
      <div class="alert-message">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script>
import IconBase from "../../assets/icons/IconBase.vue";
import IconClose from "../../assets/icons/IconClose.vue";
export default {
  components: { IconBase, IconClose },
  props: {
    isVisible: Boolean,
  },
};
</script>

<style>
.alert-dialog {
  position: absolute;
  max-width: 250px;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 5;
}

.alert-message {
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #64ffda;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #64ffda;
  font-family: monospace;
}
</style>