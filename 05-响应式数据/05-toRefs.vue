<template>
    <div>{{ newCat }}</div>

</template>

<script setup>
// toRefs
//   由非响应式对象 转换为 响应式对象
//   用在 {}对象

// toRef  一次，建立一个属性的连接
// toRefs 整体建立连接

import { toRefs } from "vue";

let cat = { myName: 'Tom', age: 5 }

const newCat = toRefs(cat)

cat.myName = 'Tom2'
cat.age = 6

</script>

<style></style>