<template>
  <!-- sum1 是函数 -->
  <div>{{ sum1() }}</div>
  <!-- sum2 是计算属性,这里不需要添加括号 -->
  <div>{{ sum2 }}</div>
  <!-- sum3 是变量，要调用 sum1 --> 
  <div>{{ sum3 }}</div>
  <!-- sum4 是变量，要调用 sum2 --> 
  <div>{{ sum4 }}</div>
</template>

<script setup>

// 计算属性（computed）
// 
//   函数（method）,当页面发生变化时,函数就会重新执行
//         return 可写可不写
// 
//   计算属性（computed），只有当其所依赖的数据发生变化时，才重新执行
//         return 必须写 
//         计算属性的底层是 ref

// 建议：为了提高效率，有return，使用 计算属性，没有 return 使用函数 

import { computed } from 'vue';
const sum1 = ()=>{
  return 11+22
}

const sum2 = computed(()=>{
  return 11+22
})

const sum3 = sum1()+66
const sum4 = sum2.value+66


</script>

<style>
</style>