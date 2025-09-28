<template>
    <myStart></myStart>
    <div>{{ msg }}</div>
</template>


<script setup>
// 语法糖
//   是 vue3 组合式的一种变形

import { ref, computed, watch } from 'vue'
// 组件
import myStart from './start.vue'

// 变量、数据
const msg = ref('hello vue')

// 函数、方法
function fun1() {
}
const fun2 = () => {
    // 推荐此方式
}

// 计算属性
const comp = computed(() => {
    return
})

// 监听器
watch(msg, (x, y) => {
})

</script>

<style></style>