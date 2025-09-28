<template>
  <div>我是父组件</div>
  <hr>
  <Child yourName="Tom" :yourAge="x"></Child>
</template>

<script setup>
// props
//    组件通信，父组件 给 子组件 传值
// 
// 用法
//    1、父组件 通过 子组件标签 的 属性，进行传值
//         1、静态绑定传值，如 yourAge="7" , 传递的类型 是字符串
//         2、动态绑定传值，如 :yourAge="x", 传递的类型 可以是任意类型

//    2、子组件 通过 defineProps 进行接收
//         1、defineProps 属于系统内置的宏定义函数，不需要导入
//         2、数组接收，功能少，代码简单
//         3、对象接收，功能多
//         4、两种不能公用

//    3、子组件接收后，直接用

import Child from './Child.vue';
import { ref } from 'vue'
const x = ref(5)

</script>

<style>
</style>