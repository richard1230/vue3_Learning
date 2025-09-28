import {createRouter,createWebHashHistory} from 'vue-router'
import News from './News.vue'
import Sports from './Sports.vue'

const router =  createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/news/abc",
            component:News
        },
        {
            path:"/sports/abc",
            component:Sports
        },
    ]
})

export default router