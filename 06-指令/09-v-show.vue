<template>
  <div v-if="2>3">111</div>
  <div v-show="2>3">222</div>
  <div style="display: none;">333</div>
  <hr>
  <div>1+1=?</div>
<!--  这里是将!x赋值给x,其实就是对x取反-->
  <button @click="x = !x">答案</button>
  <div v-show="x">2</div>

</template>

<script setup>
//  v-show
//    条件渲染指令

//  用法
//     v-show =  "布尔表达式"

//  若 布尔表达式 为真，则显示该标签
//  若 布尔表达式 为假，则隐藏该标签

// v-if   , 若布尔表达式为假，移除
// v-show , 若布尔表达式为假，隐藏，是 css ,将 display:none

// v-if    常用于 只显示一次,如果为false,源代码里面会将v-if彻底删除,就是将其从内存里面彻底清除
// v-show  常用于 来回显示或隐藏，用于开关,源代码里面不会将其删除

import { ref } from 'vue';
const x = ref(false)
</script>
<style>
</style>