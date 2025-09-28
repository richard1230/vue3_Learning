<template>
  <div>我是子组件</div>
  <div>我的名字是：{{ props.yourName }}</div>
  <div>我的年龄是：{{ yourAge+1 }}</div>
  <div>我的性别是：{{ yourSex }}</div>
</template>

<script setup>
// 方式1、数组接收
// const props = defineProps(['yourName','yourAge','yourSex'])

// 方式2、对象接收
//    key:类型声明 （类型声明，不是类型转换）
//    key:{  }

const props = defineProps({
  yourName:String,
  yourAge:{
    type:String,
    default:5
  },
  yourSex:{
    default:'Male'
  }
})
</script>

<style>
</style>