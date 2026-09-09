<template>
  <div class="page">
    <header>
      <slot name="header">
        <Header @search-value="onSearch" />
      </slot>
    </header>
    <main>
      <div class="left">
        <slot name="left"
          ><LeftList
            :defalutList="defalutList"
            :selectId="selectId"
            @addGroup="addGroup"
            @select="selectId = $event"
            @deleteGroup="deleteGroup" /></slot
        ><!-- @select="selectId = $event"子组件传值上来父组件改值，这个$event就是这个事件带来的那个值(包裹)  -->
      </div>
      <div class="right">
        <slot name="right"
          ><RightList
            :defalutList="defalutList"
            :selectId="selectId"
            :keyword="keyword"
            @add-task="addTask"
            @delete-task="deleteTask"
            @select-check="checkboxSelect"
        /></slot>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "../Header/Header.vue";
import LeftList from "../List/LeftList/LeftList.vue";
import RightList from "../List/RightList/RightList.vue";
import { ref, watchEffect } from "vue";
import type { DefalutList } from "../../types/index.ts";

import * as todoStorage from "../../utils/todoStorage.ts";

const defalutList = ref<DefalutList[]>(todoStorage.fetch()); // 初始化+读
watchEffect(() => {
  todoStorage.save(defalutList.value);
}); // 只要用到了响应式数据,这个响应式数据就自动作为依赖,就是这个watchEffect依赖这个响应式数据

// 从 TaskList 提升上来的选中状态,以后兄弟组件都能读它
const selectId = ref<number | null>(defalutList.value[0]?.id ?? null);
// 如果列表有数据且第一个元素存在，取它的 id，否则取 null

// 给defalutList数组里添加新对象
function addGroup(name: string) {
  const newId = Date.now(); // 添加分组后自动锁定最新分组
  defalutList.value.push({
    id: Date.now(),
    type: name,
    tasks: [],
  });
  selectId.value = newId;
}

// 筛选id不一样的返回成一个新数组
function deleteGroup(id: number) {
  defalutList.value = defalutList.value.filter((item) => item.id != id);
  if (selectId.value === id) {
    selectId.value = defalutList.value[0]?.id ?? null;
  } // 删除分组后选中兜底的第一个分组（直接删别的分组不会）
}

// 增加任务
function addTask(name: string) {
  const groups = defalutList.value.find((g) => g.id === selectId.value); // 筛选跟当前id一致的defaluList里面的组
  groups?.tasks.push({ id: Date.now(), type: name, completed: false }); // 添加任务，type是传上来的name
}

// 删除任务
function deleteTask(taskId: number) {
  const groups = defalutList.value.find((g) => g.id === selectId.value); // 筛选跟当前id一致的defaluList里面的组
  if (!groups) return;
  groups.tasks = groups.tasks.filter((i) => i.id != taskId); // 筛选出与当前id不一致的tasks，跟当前一致的就被筛掉了
}

// 选中checkbox
function checkboxSelect(id: number) {
  const groups = defalutList.value.find((g) => g.id === selectId.value); // 筛选跟当前id一致的defaluList里面的组
  const task = groups?.tasks.find((t) => t.id === id);
  if (!task) return;
  task.completed = !task.completed;
}

// 筛选任务
const keyword = ref("");
function onSearch(kw: string) {
  keyword.value = kw;
}
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
      width: 20%;
      height: 100%;
    }
    .right {
      width: 80%;
      height: 100%;
    }
  }
}
</style>
