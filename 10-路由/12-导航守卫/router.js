import { createRouter,createWebHistory } from 'vue-router'

// 导航守卫
//    用于控制路由的访问权限
//    常用于对路由：  捕获、中断、重定向

// 分类
//    全局导航守卫
//        beforeEach()          路由改变前 ⭐
//        afterEach()           路由改变后
//    导航独享守卫
//        beforeEnter()         路由进入前
//    组件导航守卫
//        beforeRouteEnter()    路由进入前
//        beforeRouteUpdate()   路由更新前
//        beforeRouteLeave()    路由离开前

// beforeEach( (to,from,next)=>{} )
//      to.path      捕获 目标路由
//      from.path    捕获 源路由
//      next()            放行
//      next(false)       中断
//      next('新路由')    重定向

// 应用场景
//     当访问一个网站     xxx.com
//     登入了之后         xxx.com/abc/123
//     在未登入情况前访问  xxx.com/abc/123
//     通过导航守卫进行判断，重定向 到 xxx.com

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

router.beforeEach((to,from,next)=>{
  alert(`我来自于 ${from.path} , 我要去 ${to.path}`)
  if(to.path=='/phone/mi'){
    next()
  }else if(to.path=='/phone/hw'){
    next(false)
  }else{
    next({name:'mi'})
  }
})

export default router