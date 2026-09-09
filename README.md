# 该demo的状态提升+props

把 defalutList 从 TaskList 挪到 App（两分支的共同祖先），Layout 通过 两个 的具名插槽直接把两个组件渲染出来并传参——这里涉及一个关键 Vue 知识点：插槽内容是在父组件作用域里编译的，所以 Layout里定义的数据能直接在插槽中传给 LeftList / RightList。
数据流向变成：
Layout（数据在这，负责管理）
 ├─ slot#left → LeftList →(转发 prop)→ TaskList
 └─ slot#right→ RightList →(转发 prop)→ Task
