<template>
  <div>{{ x }}</div>
</template>

<script setup>
// axios 发起请求,资源的位置
//    1、前端本地资源
//         1、资源位置，必须是 public 文件
//         2、系统设置的资源根目录，就是 public
//    2、后端数据库资源
//         1、后端程序员会提供 API接口文档


// 1、导入函数 axios
import axios from 'axios'
import { ref } from 'vue'


// 2、创建axios应用（⭐）
const axiosApp = axios.create({
  baseURL:'https://img1.doubanio.com/',
  timeout:5000
})

// 3、发起请求
const x = ref()
axiosApp.get('/f/vendors/e258329ca4b2122b4efe53fddc418967441e0e7f/js/douban.js').then((res)=>{
  x.value = res.data
})


</script>

<style>

</style>