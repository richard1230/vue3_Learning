import { createRouter,createWebHashHistory } from "vue-router";
// 一次性全部加载
import XiaoMi from "./XiaoMi.vue";

const router  = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/mi",
            component:XiaoMi
        },
        {
            path:"/hw",
            // 懒加载，按需导入 ⭐
            component:()=> import('./HuaWei.vue')
        },
    ]
})

export default router