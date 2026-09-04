<template>
  <div class="task-choose">
    <Icon class="list" type="list" :size="20" />
    <span class="text">{{ type }}</span>
    <span class="count">{{ count }}</span>
  </div>
</template>

<script setup lang="ts">
import Icon from "../Icon/Icon.vue";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  count: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped lang="scss">
@use "../../styles/color.scss" as *;
@use "../../styles/variables.scss" as *;

.task-choose {
  // 宽高和颜色
  width: 100%;
  height: 45px;
  &:hover {
    background-color: rgb(48, 48, 48);
  }
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
</style>
