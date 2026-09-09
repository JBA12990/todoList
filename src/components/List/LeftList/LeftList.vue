<template>
  <div class="left-list">
    <TaskList
      :defalutList="defalutList"
      :selectId="selectId"
      @select="emit('select', $event)"
      @addGroup="emit('addGroup', $event)"
      @deleteGroup="emit('deleteGroup', $event)"
    />
    <!-- $event 在模板里是个约定俗成的名字 = "我刚接到的那个包裹"。 -->
  </div>
</template>

<script setup lang="ts">
import TaskList from "../../List/LeftList/task/TaskList.vue";
import type { DefalutList } from "../../../types/index.ts";

// 作用：传递props给子组件
const props = defineProps<{
  defalutList: DefalutList[];
  selectId: number | null;
}>();
// 声明：向父组件喊话
const emit = defineEmits<{
  (e: "addGroup", name: string): void;
  (e: "deleteGroup", id: number): void;
  (e: "select", id: number): void;
}>();
</script>

<style scoped lang="scss">
@use "../../../styles/color.scss" as *;

.left-list {
  background: $left-list-color;
  width: 100%;
  height: 100%;

  border-left: 0.15rem solid $border-color-dark;
  border-top: 0.15rem solid $border-color-dark;
  border-bottom: 0.15rem solid $border-color-dark;
  box-sizing: border-box;
}
</style>
