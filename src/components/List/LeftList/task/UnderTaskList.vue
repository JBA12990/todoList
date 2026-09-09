<template>
  <div class="add-group" @click.stop="onAddGroup">
    <Icon type="add" class="icon" :size="20" />
    <span class="text">添加分组</span>
  </div>
</template>

<script setup lang="ts">
import Icon from "../../../Icon/Icon.vue";

const emit = defineEmits({ toggle: [] });
// 给父组件提交一个事件叫toggle
function onAddGroup() {
  emit("toggle");
}
</script>

<style scoped lang="scss">
@use "../../../../styles/color.scss" as *;
@use "../../../../styles/variables.scss" as *;

.add-group {
  // 宽高和颜色
  width: 100%;
  height: 45px;
  // 布局
  @include flex-column-center;
  gap: 2rem;
  border-radius: $border-radius;
  .icon {
    color: white;
    position: relative;
    left: 0.3em;
    cursor: pointer;
  }
  .text {
    color: white;
    position: relative;
    cursor: pointer;
  }
}
</style>
