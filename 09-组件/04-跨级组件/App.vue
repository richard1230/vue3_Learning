<template>
  <div>我是根组件</div>
  <div>家族资金：{{ money }}</div>
  <hr>
  <Father></Father>
</template>


<script setup>
// 跨级组件
//   用于组件通信，不在关心级别
// 用法
//   上层组件，通过 provide() 进行 共享数据
//   下层组件，通过 inject()  进行 数据注入

import { provide, ref } from 'vue';
import Father from './Father.vue';
const money = ref(10000)

provide( 'familyMoney'  , money )

</script>

<style>
</style>