<template>
  <div class="left-list">
    <TaskList />
  </div>
</template>

<script setup lang="ts">
import TaskChoose from '../task/TaskChoose.vue';
import TaskList from '../task/TaskList.vue';
import UnderTaskList from '../task/UnderTaskList.vue';

</script>

<style scoped lang="scss">
@use "../../styles/color.scss" as *;

.left-list{
    background: $left-list-color;
    width: 100%;
    height: 100%;
    
    border-left: 0.15rem solid $border-color-dark;
    border-top: 0.15rem solid $border-color-dark;
    border-bottom: 0.15rem solid $border-color-dark;
    box-sizing: border-box;
}

</style>