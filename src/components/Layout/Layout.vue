<template>
  <div class="page">
    <header>
      <slot name="header">
        <Header />
      </slot>
    </header>
    <main>
      <div class="left">
        <slot name="left"><LeftList /></slot>
      </div>
      <div class="right"><slot name="right"><RightList /></slot></div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "../Header/Header.vue";
import LeftList from "../List/LeftList.vue";
import RightList from "../List/RightList.vue";
</script>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    flex: 0 0 100px;
  }
  main {
    flex: 1;
    display: flex;
    .left {
      width: 30%;
      height: 100%;
    }
    .right{
        width: 70%;
        height: 100%;
    }
  }
}
</style>