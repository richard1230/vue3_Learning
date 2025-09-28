import { createRouter,createWebHistory } from 'vue-router'

// 动态路由
//    1、动态路由是一种 路径 不固定的路由
//    2、可以动态匹配
//    3、优先级低
//    4、开启路由传参
//        路由中：        props:true  
//        在对应组件中：   defineProps 进行接收
//    5、全局通用路由
//        path:'/:pathMatch(.*)*'
//        可用于 404 页面

const router = createRouter({
  history:createWebHistory(),
  routes:[
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