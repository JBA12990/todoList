<template>
  <div class="tasks" @click="toFalse()">
    <section class="header">
      <strong>{{ groups?.type }}</strong>
      <div class="addIcon" @click.stop="isFalse = !isFalse">
        <Icon type="add" :size="22" class="addIcon" />
        <div class="title"><span>添加任务</span></div>
      </div>
    </section>
    <AddTask v-show="isFalse" @click.stop="toTrue" @add-task="addTask" />
    <MainTask
      class="mainTask"
      v-for="item in tasks"
      :list-task="item"
      :key="item.id"
      :type="item.type"
      :completed="item.completed"
      :id="item.id"
      :active="item.id === selectTaskId"
      :select="item.id === selectTaskId"
      @selected="deleteTask"
      @color-select="selectTaskId = $event"
      @checkbox-select="emit('selectCheck', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "../Icon/Icon.vue";
import type { DefalutList, ListTask } from "../../types/index.ts";
import MainTask from "./MainTask.vue";
import AddTask from "../Input/AddTask.vue";

// 决定添加任务输入框是否出现
const isFalse = ref(false);
function toFalse() {
  isFalse.value = false;
}
function toTrue() {
  isFalse.value = true;
}
// 定义groups接收父组件传递
const props = defineProps<{ groups?: DefalutList; tasks: ListTask[] }>();

const emit = defineEmits<{
  (e: "addTask", name: string): void;
  (e: "deleteTask", id: number): void;
  (e: "selectCheck", id: number): void;
}>();
// 状态：当前选中的任务 id（在selectTaskId = $event被赋值，这个$event就是被上传的id）
const selectTaskId = ref<number | null>(null);

// 新增任务
function addTask(name: string) {
  emit("addTask", name);
}
// 删除任务
function deleteTask(id: number) {
  emit("deleteTask", id);
}
</script>

<style scoped lang="scss">
@use "../../styles/color.scss" as *;
@use "../../styles/variables.scss" as *;

.tasks {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  gap: 0.2rem;
  .header {
    position: relative;
    top: 2rem;
    box-sizing: border-box;
    padding: 0 2rem;
    width: 100%;
    justify-content: space-between;

    @include flex-column-center;
    strong {
      color: white;
      font-size: 2rem;
    }
    .addIcon {
      width: 2rem;
      height: 2rem;
      @include flex-center;
      border-radius: 15px;
      color: white;
      cursor: pointer;

      transition: all 0.2s ease-in-out;

      .title {
        width: 5rem;
        height: 2rem;

        position: absolute;
        transform: translateY(2rem); // 位移
        opacity: 0;
        background: $text-color;
        @include flex-center;
        border-radius: 5px;
      }
      &:hover {
        .title {
          opacity: 1;
          transform: translateY(2.5rem);
        }
        background: $text-color;
      }
    }
  }
  input {
    width: 98%;
    height: 3.5rem;

    position: relative;
    top: 5rem;

    display: block;
    margin: 0 auto;
    padding: 0 1.2rem;
    margin-bottom: 0.2rem;
  }
  .mainTask {
    position: relative;
    top: 5rem;
    margin: 0 auto;
    margin-top: 0.2rem;
  }
}
</style>
