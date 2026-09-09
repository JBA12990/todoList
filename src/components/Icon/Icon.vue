<template>
  <i class="iconfont" :class="fontClass" :style="{ fontSize: size + 'px' }"></i>
  <!-- :class绑定动态类样式 -->
</template>

<script setup lang="ts">
import { computed } from "vue";

//图标对象
const classMap = {
  return: "icon-fanhui",
  close: "icon-guanbi",
  close1: "icon-guanbi1",
  bowUP1: "icon-jiantoushang", // 箭头上1
  bowUP2: "icon-jiantoushang1", // 箭头上2
  bowRight: "icon-jiantouyou", // 箭头右
  bowDown: "icon-jiantouxia", // 箭头下
  mine: "icon-wode", // 我的
  sort: "icon-fenlei", // 分类
  search: "icon-sousuo", // 搜索
  choose: "icon-xuanzhong", // 选中
  noChoose: "icon-weigouxuan", // 未勾选
  doneChoose: "yigouxuan", // 已勾选
  add: "icon-jiajianzujianjiahao", // 加号
  list: "icon-liebiao", // 列表
  delete: "icon-shanchu", // 删除
};

const props = defineProps({
  type: {
    type: String,
    required: true,
    defalut: "add",
  },
  size: {
    type: Number,
    default: 16,
  },
});

//图标类样式
const fontClass = computed(() => classMap[props.type as keyof typeof classMap]); // 类型断言
</script>

<style scoped>
@import url(./icons/iconfont.css);
</style>
