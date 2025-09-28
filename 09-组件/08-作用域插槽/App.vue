<template>
  <div>我是父组件</div>
  <hr>
  <Child>
    <template v-slot:nameSlot="x" >{{ x.n1 }}</template>
    <template #ageSlot="x">{{ x.a2 }}</template>
  </Child>
</template>

<script setup>
// 作用域插槽
//    1、指 在子组件中，插槽可以给 父组件 提供参考值

// 用法
//    1、在子组件标签 的 插槽中，要有 非name属性
//    2、在父组件标签 中 进行 插槽传值时
//          1 <template #插槽名="变量">{{变量.插槽的非name属性}}</template>
//          2 父组件 并非一定要使用 子组件插槽的 非name属性

import Child from './Child.vue';
</script>

<style>
</style>