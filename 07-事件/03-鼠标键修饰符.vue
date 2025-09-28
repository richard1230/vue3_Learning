<template>
  <div :class="myC"
   @click.left="myC='red-style'" 
   @click.right.prevent="myC='green-style'" 
   @click.middle="myC='blue-style'" 
  >你好</div>
</template>

<script setup>
import { ref } from 'vue';

// 鼠标键修饰符
//   @click.left      左键
//   @click.right     右键
//   @click.middle    滚轮键

const myC = ref()

</script>

<style>
.red-style{
  color:red
}
.green-style{
  color:green
}
.blue-style{
  color:blue
}
</style>