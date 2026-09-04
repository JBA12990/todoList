<template>
  <div class="container">
    <Icon class="searchIcon" type="search" :size="46" />
    <Input class="Input" />
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import Input from "../Input/input.vue";
</script>

<style scoped lang="scss">
@use "../../styles/color.scss" as *;

.container {
  background: $header-color-dark;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  .searchIcon {
    color: rgb(255, 255, 255);
    position: relative;
    left: 1em;
  }
  .Input {
    position: relative;
    left: 5em;
  }
}
</style>
