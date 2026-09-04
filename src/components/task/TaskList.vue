<template>
  <div class="task-list">
    <TaskChoose
      v-for="item in defalutList"
      :key="item.id"
      :type="item.type"
      :count="item.count"
    />
    <!-- 需要绑定数据才能传下去 -->
    <UnderTaskList class="underList" />
  </div>
</template>

<script setup lang="ts">
import TaskChoose from "./TaskChoose.vue";
import UnderTaskList from "./UnderTaskList.vue";

interface DefalutList {
  id: number;
  type: string;
  count: number;
}

const defalutList: DefalutList[] = [
  { id: 1, type: "待处理", count: 0 },
  { id: 2, type: "进行中", count: 0 },
  { id: 3, type: "未命名", count: 0 },
];
</script>

<style scoped lang="scss">
@use "../../styles/color.scss" as *;

.task-list {
  height: 100%;
  margin: 0.2rem 0;
  display: flex;
  flex-direction: column;
}
.underList {
  margin-top: auto;
}
</style>
