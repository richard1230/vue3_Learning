<template>
  <div v-on:click="run" :style="myS">你好</div>
  <button @dblclick="c++">双击+1, {{ c }}</button>
</template>

<script setup>
import { ref } from 'vue';

// v-on
//    事件绑定

// 用法
//    v-on:事件名="js表达式"
//    简写：  @事件名="js表达式"

const myS = ref()
const c = ref(10)
const run =()=>{
  myS.value = 'color:red'
}

</script>

<style>

</style>