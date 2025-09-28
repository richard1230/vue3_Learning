<template>
  <div>我是父组件</div>
  <div :style="{fontSize:x+'px'}">父组件。。看小说</div>
  <hr>
  <Child @big="run1($event)" @small="run2"></Child>
</template>

<script setup>
// emits
//    用于组件通信， 子组件 给 父组件  传事件
// 用法
//    1、子组件，创建 emits 对象
//           1、defineEmits 系统宏定义函数，不需要导入
//           2、其功能是 自定义事件
//    2、父组件，通过 监听 子组件标签的事件 进行接收
//           1、$event 来自于 子组件中 emits

import Child from './Child.vue'
import { ref } from 'vue'
const x = ref(15)
const run1 = (e)=>{
  x.value = e
}
const run2 = (e)=>{
  x.value = e
}
</script>

<style>
</style>


