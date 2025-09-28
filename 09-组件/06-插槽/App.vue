<template>
  <div>我是父组件</div>
  <hr>
  <Child>张三</Child>
</template>


<script setup>
// 插槽（slot）
//   1、是指，对子组件的封装，父组件给子组件传值
//   2、插槽，是 子组件 预留的空间，用来接收父组件的数据

// 用法：
//   1、在子组件中，通过 <slot></slot> 去定义插槽
//           <slot>默认值</slot> ， 只有在父组件，未传值的时候，才显示默认值
//   2、在父组件中，通过  子组件标签 的内容 进行传值

import Child from './Child.vue';

</script>

<style>
</style>