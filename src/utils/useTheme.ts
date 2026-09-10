import { ref, watchEffect } from "vue";

type Theme = "light" | "dark";
const LOCAL_KEY = "__theme__";
const theme = ref<Theme>((localStorage.getItem(LOCAL_KEY) as Theme) || "light"); //本地没值的时候默认light

// 捕获响应式数据的变化
watchEffect(() => {
  document.documentElement.dataset.theme = theme.value;
  localStorage.setItem(LOCAL_KEY, theme.value);
});

export default function useTheme() {
  return {
    theme,
  };
}
