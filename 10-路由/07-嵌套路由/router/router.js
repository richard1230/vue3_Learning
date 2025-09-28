import { createRouter,createWebHashHistory } from 'vue-router'

// 嵌套路由
//    上层路由 包含 下层路由
//    上层路由 从 / 开始
// 下层路由写相对路径 或者 完全绝对路径

// 上层路由 若想返回一个组件
//     必须 写路由视图  就是router-view
//     是为了给 下层路由 显示组件 

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            // 上层路由
            path:'/phone/',
            component:()=>import('../components/Phone.vue'),
            children:[
                {
                    // 下层路由
                    path:'mi',
                    component:()=>import('../components/XiaoMi.vue')
                },
                {
                    path:'hw',
                    component:()=>import('../components/HuaWei.vue')
                },
                {
                    path:'oppo',
                    component:()=>import('../components/Oppo.vue')
                },
                {
                    // 完整路由
                    path:'/phone/vivo',
                    component:()=>import('../components/Vivo.vue')
                },
            ]
        }
    ]
})

export default router