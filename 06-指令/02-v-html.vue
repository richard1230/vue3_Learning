<template>
    <div>{{ msg }}</div>
    <div v-text="msg"></div>
    <div v-html="msg"></div>
</template>

<script setup>
// v-html
//   文本渲染、文本插值
//   会对传入的字符串进行解析,不过用到的也比较少

// 用法
//   v-html="变量"

import { ref } from "vue";
const msg = ref('<a href="#">百度</a>')

</script>
<style></style>