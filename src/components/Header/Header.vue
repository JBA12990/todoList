<template>
  <div class="container">
    <Icon class="searchIcon" type="search" :size="46" />
    <Input class="Input" @search-value="emit('searchValue', $event)" />
    <div class="themeChange" @click="toggleTheme">
      <Icon type="change" :size="46" />
      <strong>深浅主题切换</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";
import Input from "../Input/input.vue";
import useTheme from "../../utils/useTheme.ts";

const { theme } = useTheme();

function toggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light"; // 三目运算符判断如果是light则切换dark,否则是light
}
const emit = defineEmits<{ (e: "searchValue", type: string): void }>();
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
    color: var(--panel-text);
    position: relative;
    left: 1em;
  }
  .Input {
    position: relative;
    left: 5em;
  }
  .themeChange {
    position: absolute;
    top: 1em;
    right: 2em;
    display: flex;
    flex-direction: column;
    color: var(--panel-text);
    cursor: pointer;
    strong {
      position: relative;
      color: var(--panel-text);
      font-size: 1.2rem;
      right: 1.5em;
      opacity: 0;
    }
    &:hover {
      strong {
        opacity: 1;
      }
    }
  }
}
</style>
