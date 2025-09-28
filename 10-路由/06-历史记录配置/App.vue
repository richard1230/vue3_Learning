<template>
    <button @click="router.back()">后退</button>
    <button @click="router.forward()">前进</button>
    <button @click="router.go(-2)">后退2次</button>
    <button @click="router.go(2)">前进2次</button>
    <hr>
    <span @click="router.push('/mi')">小米</span> | 
    <span @click="router.push('/hw')">华为</span> | 
    <span @click="router.push('/oppo')">oppo</span> | 
    <span @click="router.replace('/vivo')">vivo</span>
    <hr>
    <router-view></router-view>
</template>

<script setup>
// push()     访问路由，并且路由存入 历史记录
// replace()  访问路由，自己本身不会直接存入历史记录但会 替换当前 历史记录的路由信息
举个例子来理解
依次访问 小米-->华为-->vivo-->oppo
vivo正常使用push --->点击后退，返回到vivo,再次点击后退，返回到华为
vivo使用replace --->点击后退，返回到vivo,再次点击后退，返回到小米
// back()     后退
// forward()  前进
// go(n)      指定步长，前进后退
//     go(-1) 等同于 back()
//     go(1)  等同于 forward()

import { useRouter } from "vue-router";
const router = useRouter()


</script>

<style>

</style>