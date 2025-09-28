import { createRouter,createWebHistory } from 'vue-router'

// 重定向
//    redirect:'新路由'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      redirect:'/phone/mi'
    },
    {
      path:'/phone/oppo',
      redirect:'/phone/hw'
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
  ]

})

export default router