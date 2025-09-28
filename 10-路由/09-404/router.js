import { createRouter,createWebHistory } from 'vue-router'

// 动态路由
//    全局通用路由
//        path:'/:pathMatch(.*)*'
//        可用于 404 页面
//        优先级最低

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      component:()=>import('./XiaoMi.vue')
    },
    {
      path:'/phone/mi',
      component:()=>import('./XiaoMi.vue')
    },
    {
      path:'/phone/:msg',
      component:()=>import('./Phone.vue'),
      props:true
    },
    {
      path:'/:pathMatch(.*)*',
      component:()=>import('./404.vue')
    },
  ]

})

export default router