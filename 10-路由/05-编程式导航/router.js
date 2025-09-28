import { createRouter,createWebHashHistory } from 'vue-router'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/mi',
            component:()=>import('./XiaoMi.vue')
        },
        {
            path:'/hw',
            component:()=>import('./HuaWei.vue')
        },
        {
            path:'/oppo',
            component:()=>import('./Oppo.vue')
        },
        {
            path:'/vivo',
            component:()=>import('./Vivo.vue')
        },
    ]

})

export default router