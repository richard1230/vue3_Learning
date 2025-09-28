<template>
  <a href="https://www.baidu.com">百度</a> | 
  <a href="#">163</a> | 
  <a href="#">{{sina}}</a> 
</template>

<script setup>
import { ref } from 'vue';

const sina = ref('新浪')
</script>

<style>
</style>