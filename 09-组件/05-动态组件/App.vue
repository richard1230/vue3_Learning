<template>
  <div>我是父组件</div>
  <button @click="x=Child1">一</button>
  <button @click="x=Child2" >二</button>
  <hr>
  <component :is = "x"></component>

</template>

<script setup>
// 动态组件
//    父组件中，引入的子组件，可以动态的切换
// 使用
//    <component :is= '变量'>

import { ref } from 'vue';
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';

const x = ref()
</script>

<style>
</style>