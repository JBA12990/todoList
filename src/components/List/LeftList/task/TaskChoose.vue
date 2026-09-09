<template>
  <div class="task-choose" :class="{ selected: active }" @click="selectedColor">
    <Icon class="list" type="list" :size="20" />
    <span class="text">{{ type }}</span>
    <span class="count">{{ count }}</span>
    <Icon type="delete" :size="20" class="list delete" @click.stop="Delete" />
  </div>
</template>

<script setup lang="ts">
import Icon from "../../../Icon/Icon.vue";
// 定义属性接收父组件
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  count: {
    type: Number,
    default: 0,
  },
  id: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: "delete", id: number): void;
  (e: "selected", id: number): void;
}>();

// 两个都是向上传事件+id
function selectedColor() {
  emit("selected", props.id);
}
function Delete() {
  emit("delete", props.id);
}
</script>

<style scoped lang="scss">
@use "../../../../styles/color.scss" as *;
@use "../../../../styles/variables.scss" as *;

.task-choose {
  // 宽高和颜色
  width: 100%;
  height: 45px;
  &:hover {
    background-color: $selected-color-dark;
  }
  // &.router-link-exact-active {
  //   background-color: $selected-color-dark; // url完全一致时触发
  // }
  text-decoration: none;
  color: inherit;
  // 布局
  @include flex-column-center;
  gap: 2rem;
  border-radius: $border-radius;

  cursor: pointer;

  // 子元素
  .list {
    color: rgb(255, 255, 255);
    position: relative;
    left: 0.3em;
  }
  .delete {
    position: relative;
    transform: translateX(-1rem);
  }
  .text {
    color: white;
    position: relative;
  }
  .count {
    color: white;
    margin-right: 2rem;
    margin-left: auto;
  }
}

.task-choose.selected {
  background-color: rgb(58, 63, 85);
}
</style>
