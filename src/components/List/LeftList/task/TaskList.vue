<template>
  <div class="task-list" @click="toFalse">
    <TaskChoose
      v-for="item in defalutList"
      :key="item.id"
      :type="item.type"
      :count="item.tasks.length"
      :id="item.id"
      :active="item.id === selectId"
      @delete="onDelete"
      @selected="onSelectId"
    />
    <AddGroup class="addGroup" type="text" v-if="isFalse" @add="onAdd" />
    <!-- 需要绑定数据才能传下去 -->
    <UnderTaskList class="underList" @toggle="isFalse = !isFalse" />
    <!-- @toggle是子组件defineEmits定义的，通过函数emit传上来 -->
  </div>
</template>

<script setup lang="ts">
import TaskChoose from "./TaskChoose.vue";
import UnderTaskList from "./UnderTaskList.vue";
import AddGroup from "../../../Input/AddGroup.vue";
import { ref } from "vue";

import type { DefalutList } from "../../../../types/index.ts";

const props = defineProps<{
  defalutList: DefalutList[];
  selectId: number | null;
}>();
// 判断AddGroup是否显示
const isFalse = ref(false);
// 点到其他地方时不显示输入框
function toFalse() {
  isFalse.value = false;
}
// 定义事件
const emit = defineEmits<{
  (e: "addGroup", name: string): void;
  (e: "deleteGroup", id: number): void;
  (e: "select", id: number): void;
}>();

// 声明，向上传ID
function onSelectId(id: number) {
  emit("select", id);
}
// 声明，向上喊一个addGroup的消息，带一个name
function onAdd(name: string) {
  isFalse.value = false;
  emit("addGroup", name);
}
// 声明，向上喊一个deleteGroup的消息，带一个id
function onDelete(id: number) {
  emit("deleteGroup", id);
}
</script>

<style scoped lang="scss">
@use "../../../../styles/color.scss" as *;

.task-list {
  // 任务列表样式
  height: 100%;
  // margin: 0.2rem 0;
  display: flex;
  flex-direction: column;
  .addGroup {
    // 添加分组样式
    height: 2.5rem;
    border-radius: $border-radius;
    border: solid 0.2rem $border-color-dark;
    outline: none;
    background-color: $left-list-color;
    color: rgb(255, 255, 255);
    margin-top: 0.25rem;
    padding: 0 1.2rem;
    font-size: large;
    &:focus {
      border: solid 0.2rem $select-border-color;
    }
  }
  .underList {
    margin-top: auto;
  }
}
</style>
