// 路由的使用
//   1、指：启用路由功能---》app.use那一步骤
//   2、在 src/main.js 文件中 注入路由（启用路由功能）
//   3、启用之前需要创建一个 router.js 文件


// ------- 完整的 main.js 内容 ------------------

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

// 1 创建 vue3 应用
const app = createApp(App)
// 2 给应用 注入 router 功能
app.use(router)
// 3 挂载
app.mount('#app')
