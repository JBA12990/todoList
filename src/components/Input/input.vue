<template>
    <input type="text" placeholder="搜索任务"/>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "../../styles/color.scss" as *;

  input {
    width: 40rem;
    height: 3rem;
    border-radius: $border-radius;
    border: none;
    outline: none; 
    background-color: rgb(42, 42, 42);
    color: rgb(255,255,255);

    padding: 0 1.2rem;
    font-size: large;
  }
</style>
