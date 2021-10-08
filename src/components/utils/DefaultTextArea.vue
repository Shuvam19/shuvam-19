<template>
  <div
    contenteditable="true"
    class="default-text-area"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.innerText)"
  >{{modelValue}}</div>
</template>

<script>
export default {
  name: "DefaultTextArea",
  props: {
    modelValue: String,
    placeholder: String,
  },
};
</script>

<style scoped>
.default-text-area {
  height: 100%;
  box-sizing: border-box;
  background: none;
  border: 1px solid #b0bbda;
  border-radius: 5px;
  padding: 10px;
  color: #b0bbda;
}

.default-text-area:focus {
  outline: none;
}
</style>