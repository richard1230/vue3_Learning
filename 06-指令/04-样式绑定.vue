<template>
    <div :style="x">你好1</div>
    <div :style="y">你好2</div>
    <div :style="{ color: z }">你好3</div>
    <div :style="[a1, a2]">你好4</div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// 方式1： 字符串方式 ⭐
const x = ref('color:red')

// 方式2： 对象方式
const y = reactive({ color: 'blue' })

// 方式3： 插值方式 ⭐
const z = ref('green')

// 方式4： 数组方式
const a1 = ref('color:yellow')
const a2 = reactive({ background: 'blue' })
</script>
<style></style>