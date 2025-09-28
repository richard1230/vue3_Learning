import { createRouter,createWebHistory } from 'vue-router'

// 命名路由
//    1、路由有名字
//    2、命名路由 可以 与 动态路由 搭配使用
// 使用
//    1、路由中：   name:'路由名'  ---》为什么这么干?如果某天想要将/phone/mi 改为/phone/mii,由于这个路径在多处地方都有,岂不是需要在很多地方去改？
//    2、组件中：   router.push( {  name:'路由名'  } )
//    3、组件中：   router.push( {  name:'路由名' ，,params:{动态路由的变量:'参数值'}  } )

const router = createRouter({
  history:createWebHistory(),
  routes:[ 
    {
      path:'/phone/mi',
      name:'mi',
      component:()=>import('./XiaoMi.vue')
    },
    {
      path:'/phone/:msg',
      name:'phone',
      component:()=>import('./Phone.vue'),
      props:true
    },
  ]

})

export default router