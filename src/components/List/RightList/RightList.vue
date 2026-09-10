<template>
  <div class="right-list">
    <Tasks
      v-if="defalutList.length > 0"
      :groups="activeGroup"
      :tasks="visibleTasks"
      @add-task="emit('addTask', $event)"
      @delete-task="emit('deleteTask', $event)"
      @select-check="emit('selectCheck', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import Tasks from "../../main/Tasks.vue";
import type { DefalutList } from "../../../types/index.ts";
import { computed } from "vue";

// 作用：接收父组件传下来的数据
const props = defineProps<{
  defalutList: DefalutList[];
  selectId: number | null;
  keyword: string;
}>();

// 定义emit，传递数据作用
const emit = defineEmits<{
  (e: "addTask", name: string): void;
  (e: "deleteTask", id: number): void;
  (e: "selectCheck", id: number): void;
}>();

// 返回一个经查找的Id分组：g.id是defaultList里的所有id,props.selectId是点击后的id,这个在TaskChoose的@click="selectedColor"那里被传递的,g.id是把id一项一项拿出来跟selectId进行对比
const activeGroup = computed(() => {
  return props.defalutList.find((g) => g.id === props.selectId);
});

// 根据关键词派生筛选
const visibleTasks = computed(() => {
  const groups = activeGroup.value; // 依赖的分组
  if (!groups) return []; // 如果分组是空，则返回空数组
  const kw = props.keyword.trim(); // 拿到传递下来的keyWord
  if (!kw) return groups.tasks; // 如果keyWord是空，则返回原分组所有tasks
  return groups.tasks.filter((t) => t.type.includes(kw)); // 进行筛选，筛选传递下来的keyword被包含在groups.tasks里的type
});
</script>

<style lang="scss" scoped>
@use "../../../styles/color.scss" as *;

.right-list {
  background: var(--right-list-bg);
  width: 100%;
  height: 100%;
  border-left: 0.15rem solid var(--border);
  box-sizing: border-box;
}
</style>
