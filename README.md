# 该demo的状态提升+props

把 defalutList 从 TaskList 挪到 App（两分支的共同祖先），Layout 通过 两个 的具名插槽直接把两个组件渲染出来并传参——这里涉及一个关键 Vue 知识点：插槽内容是在父组件作用域里编译的，所以 Layout里定义的数据能直接在插槽中传给 LeftList / RightList。
数据流向变成：
Layout（数据在这，负责管理）
 ├─ slot#left → LeftList →(转发 prop)→ TaskList
 └─ slot#right→ RightList →(转发 prop)→ Task

 # 数据传递给爷爷辈
 
 AddGroup 里：  emit("add", text)          // text = 用户输入的"工作"/"学习"…
                              ↓ Vue 把 text 塞给监听函数
TaskList 里：  @add="onAdd"  →  function onAdd(name) { … }
                              括号里的 name 正好接住从 AddGroup 寄来的第一个包裹
关键理解：Vue 的规矩是——子组件 emit("add", 包裹A, 包裹B)，父组件监听函数的第 1 个参数就收到包裹A，第 2 个收包裹B。
AddGroup 寄了一个包裹（名字 text），TaskList 的 onAdd 得伸出手去接，才拿得到。你现在括号空着 = 手没伸出去，包裹掉地上，函数里自然没有 name 可用