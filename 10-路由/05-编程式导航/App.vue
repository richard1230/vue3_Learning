<template>
   <!--   <span @click="run">小米</span>-->

    <span @click="router.push('/mi')">小米</span> | 
    <span @click="router.push('/hw')">华为</span> | 
    <span @click="router.push('/oppo')">oppo</span> | 
    <span @click="router.push('/vivo')">vivo</span>
    <hr>
    <router-view></router-view>
</template>

<script setup>
// 编程式导航
//    1、可以是任意标签---》声明是导航只能是a标签，即router-link
//    2、通过 @click 实现路由跳转

// 步骤
//    1、引入函数 useRouter
//    2、创建对象 useRouter()
//    3、使用该对象的 方法
//        push、replace、back、forward、go

import { useRouter } from "vue-router";
const router = useRouter()
// const run =()=>{
//   router.push('/mi')
// }


</script>

<style>

</style>