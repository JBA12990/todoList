const LOCAL_KEY = "todosmvc"; // 全局唯一的钥匙，随便起

import type { DefalutList } from "../types";

/**
 *  获取目前所有任务
 */
export function fetch(): DefalutList[] { // fetch() 的工作是"去 localStorage 把列表读出来"。
  const result = localStorage.getItem(LOCAL_KEY);
  if (result) {
    try {
      // 捕获到后返回JSON字符串形式
      return JSON.parse(result);
    } catch {
      return [];
    }
  }
  return [];
}

/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export function save(todos: DefalutList[]) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
}
