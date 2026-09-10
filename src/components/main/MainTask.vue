<template>
  <div class="mainTask" @click="TaskSelectColor" :class="{ selected: active }">
    <input type="checkbox" @click.stop="checkboxSelect" :checked="completed" />
    <span class="text">{{ props.type }}</span>
    <Icon type="delete" class="Icon" :size="20" @click.stop="TaskId" />
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";

// 定义props接收父组件传下来的属性
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: "false",
  },
  id: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    defalut: "false",
  },
});
// 定义emit事件监听
const emit = defineEmits<{
  (e: "selected", id: number): void;
  (e: "colorSelect", id: number): void;
  (e: "checkboxSelect", id: number): void;
}>();

// 给父组件上报selected事件并携带当前id
function TaskId() {
  emit("selected", props.id);
}

function TaskSelectColor() {
  emit("colorSelect", props.id);
}

function checkboxSelect() {
  emit("checkboxSelect", props.id);
}
</script>

<style scoped lang="scss">
@use "../../styles/variables.scss" as *;
@use "../../styles/color.scss" as *;

.mainTask {
  width: 98%;
  height: 3.5rem;
  background-color: $task-color;
  @include flex-column-center;
  border-radius: $border-radius;
  gap: 2rem;

  box-sizing: border-box;
  input[type="checkbox"] {
    margin-left: 2rem;
    appearance: none;
    -webkit-appearance: none;

    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid #999;
    border-radius: 8px;
    cursor: pointer;
    background-color: #fff;

    &:checked {
      background-color: #4caf50;
      border-color: #4caf50;

      &::after {
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg); // 两根边拼出一个对勾
      }
    }
  }
  .text {
    color: var(--panel-text);
  }
  .Icon {
    color: var(--add-icon);
    margin-left: auto;
    margin-right: 3rem;
    cursor: pointer;
  }
}
.mainTask.selected {
  border: solid 0.16rem $select-border-color;
}
</style>
