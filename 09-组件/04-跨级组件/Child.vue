<template>
  <div>我是子组件</div>
  <div>查看资金：{{ money }}</div>
  <button @click="money+=500">挣钱</button>
</template>


<script setup>
import { inject } from 'vue';


const money = inject('familyMoney')

</script>

<style>
</style>