<template>
  <div v-for="x in arr">{{ x }}</div>
  <textarea :style="{color:x}"  v-model="ta" 
    @keydown.a="x='red'"
    @keydown.b="x='blue'"
    @keydown.esc="ta=''"
    @keydown.enter.prevent="arr.push(ta);ta=''"
    @keydown.f1="x='orange'"
    @keydown.meta="x='yellow'">
  </textarea>
  <button @click="arr.push(ta); ta=''">提交</button>
</template>
<script setup>
// 按键修饰符
//    按键事件:  keydown keyup
// 用法
//    @keydown.任意键
// 特殊按键
//    @keydown.enter   回车键
//    @keydown.esc     esc键
//    @keydown.f1      f1键
//    @keydown.ctrl    ctrl键
//    @keydown.alt     alt键
//    @keydown.shift   shift键
//    @keydown.meta    开始菜单键  
import { ref } from 'vue';
const x = ref()
const ta = ref()
const arr = ref([])
</script>

<style>

</style>