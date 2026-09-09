<template>
  <input
    type="text"
    placeholder="搜索任务"
    v-model="textValue"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
const textValue = ref("");
const emit = defineEmits<{ (e: "searchValue", type: string): void }>();

function onInput(e: Event) {
  const el = e.target as HTMLInputElement; // 类型断言
  emit("searchValue", el.value);
}
// 因为v-model本身也是监听Input事件，跟这个显式的@input是同一时刻去触发两个处理函数，也就是textValue的输入和@input是同时触发的，谁先谁后不能赌
</script>

<style scoped lang="scss">
@use "../../styles/color.scss" as *;

input {
  width: 40rem;
  height: 3rem;
  border-radius: $border-radius;
  border: none;
  outline: none;
  background-color: rgb(42, 42, 42);
  color: rgb(255, 255, 255);

  padding: 0 1.2rem;
  font-size: large;
}
</style>
