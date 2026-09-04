<template>
  <layout></layout>
</template>

<script setup lang="ts">
import Layout from "./components/Layout/Layout.vue";
</script>

<style lang="scss">
/* 全局重置：body 的 8px 是浏览器 UA 默认样式，必须用非 scoped 的全局样式覆盖；
   scoped 会带 data 属性限制，够不到组件外的 body */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
  #app {
    height: 100%;
  }
}
</style>