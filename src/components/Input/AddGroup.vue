<template>
  <input
    type="text"
    v-model="inputValue"
    @keydown.enter="submit"
    @blur="submit"
    @click.stop
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputValue = ref("");
const emit = defineEmits<{ (e: "add", name: string): void }>();

function submit() {
  const text = inputValue.value.trim();
  if (!text) return;
  emit("add", text); // 告诉父组件add事件，并携带着text数据上传
  inputValue.value = "";
}
</script>

<style scoped lang="scss"></style>
