<template>
  <div v-if="h<12">上午好</div>
  <div v-else-if="h<18">下午好</div>
  <div v-else>晚上好</div>
</template>

<script setup>
//  v-if
//    条件渲染指令

//  用法
//     v-if =  "布尔表达式"
//     v-else-if= "布尔表达式"
//     v-else

//  若 布尔表达式 为真，则显示该标签
//  若 布尔表达式 为假，则移除该标签
import { ref } from 'vue';
const h = ref(23)
</script>
<style>
</style>