<template>
  <div class="row arrow-container">
    <a href="#about" class="arrow-icon" role="button">
      <i class="fas fa-chevron-down fa-4x"></i>
    </a>
  </div>
</template>

<script>
import data from "../data/data.json";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Arrow",
  props: {},
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style lang="scss"></style>
