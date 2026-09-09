<template>
  <input
    type="text"
    class="addTask"
    v-model="inputTask"
    @keydown.enter="submitTask"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputTask = ref("");
const emit = defineEmits<{ (e: "addTask", name: string): void }>();
function submitTask() {
  const text = inputTask.value.trim();
  if (!text) return;
  emit("addTask", text); // 告诉父组件add事件，并携带着text数据上传
  inputTask.value = "";
}
</script>

<style scoped lang="scss">
@use "../../styles/color.scss" as *;
@use "../../styles/variables.scss" as *;

.addTask {
  width: 100%;
  height: 100%;

  font-size: large;
  background-color: rgb(18, 18, 18);
  color: white;
  outline: none;

  border: solid 0.17rem rgb(87, 119, 248);
  border-radius: $border-radius;
}
</style>
