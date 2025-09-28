<template>
  <div>{{ x[1].age }}</div>
</template>

<script setup>
// axios 发起请求,资源的位置
//    1、前端本地资源
//         1、资源位置，必须是 public 文件
//         2、系统设置的资源根目录，就是 public
//    2、后端数据库资源

// 1、导入函数 axios
import axios from 'axios'
import { ref } from 'vue'

// 2、创建axios应用（此方式，功能太少）
// const axiosApp = axios({})

// 2、创建axios应用（⭐）
const axiosApp = axios.create({
  baseURL:'/',
  timeout:5000
})

// 3、发起请求
const x = ref()
axiosApp.get('./123.json').then((res)=>{
  x.value = res.data
})


</script>

<style>

</style>