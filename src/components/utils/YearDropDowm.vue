<template>
  <input
    class="project-year"
    placeholder="year"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  />
</template>

<script>
export default {
  name: "YearDropDown",
  props: {
    modelValue: String,
  },
};
</script>

<style scoped>
.project-year {
  height: 100%;
  box-sizing: border-box;
  background: none;
  border: 1px solid #b0bbda;
  border-radius: 5px;
  padding: 10px;
  color: #b0bbda;
}
.project-year:focus {
  outline: none;
}
</style>