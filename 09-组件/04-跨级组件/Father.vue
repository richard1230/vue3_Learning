<template>
  <div>我是父组件</div>
  <div>查看资金：{{ money }}</div>
  <button @click="money-=1000">花钱</button>
  <hr>
  <Child></Child>
</template>


<script setup>
import { inject } from 'vue';
import Child from './Child.vue';

const money = inject('familyMoney')

</script>

<style>
</style>