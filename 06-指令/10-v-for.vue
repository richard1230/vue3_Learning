<template>
  <div>喜欢的球类运动：</div>
  <div v-for="(x,i) in arr">{{ i+1+'、'+x }}</div>
  <hr>
  <div v-for="x in 3">{{ x }}</div>
  <hr>
  <div v-for="x in 'abc'">{{ x }}</div>
  <hr>
  <div v-for="x in obj">{{ x }}</div>

</template>

<script setup>
//  v-for
//    列表渲染指令
//  用法
//     v-for =  "(x,i) in 容器"
//     x 遍历容器，取内容
//     i 取下标，从0编号
//  简写
//     () 和 i 可以省
// 
//  容器
//     数字    是指，遍历 1~该数字
//     数组    是指，遍历数组元素
//     字符串  是指，遍历字符串中，每一个字符
//     对象    是指，遍历对象中，每一个value
import { reactive, ref } from 'vue';
const arr = ref(['足球','篮球','排球'])
const obj = reactive({myName:'Tom',myAge:5})

</script>
<style>
</style>