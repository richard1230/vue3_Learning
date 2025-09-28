<template>
  <div>{{ msg }}</div>
  <div v-text="msg"></div>
</template>

<script setup>
// 指令
//    是vue语法，用在 标签属性中
//    以 v- 开头

// v-text
//   文本渲染、文本插值
//   其原理 等同 {{ }}
//   不推荐用，太麻烦
// 用法
//   v-text="变量"

import { ref } from "vue";
const msg = ref('hello')

</script>
<style>
</style>