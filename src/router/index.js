import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = []

// Vue2.0 new VueRouter({})创建路由实例
// Vue3.0 createRouter({})创建路由实例

const router = createRouter({
  // 使用hash的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
