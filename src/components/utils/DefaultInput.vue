<template>
  <input
    class="default-input"
    type="text"
    name="Title"
    placeholder="Title"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  />
</template>

<script>
export default {
  name: "DefaultInput",
  props: {
    modelValue: String,
  },
};
</script>

<style scoped>
.default-input {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: none;
  border: 1px solid #b0bbda;
  border-radius: 5px;
  padding: 10px;
  color: #b0bbda;
}
.default-input:focus {
  outline: none;
}
</style>