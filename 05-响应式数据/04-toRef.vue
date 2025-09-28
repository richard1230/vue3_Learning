<template>
    <div>{{ name1 }}</div>
    <div>{{ name2 }}</div>

</template>

<script setup>
// toRef
//   由非响应式对象 转换为 响应式对象
//   用在 {}对象
import { toRef } from "vue";

let cat001 = { myName: 'Tom', age: 5 }

// 直接提取，不会建立联系
let name1 = cat001.myName

cat001.myName = "Tom2"   //此时名字为不会变为Tom2


const name2 = toRef(cat001,"myName")

cat001.myName = "Tom2"  //此时名字为会变为Tom2





</script>

<style></style>