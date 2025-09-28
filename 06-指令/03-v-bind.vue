<template>
    <div v-bind:style="x">你好</div>
    <button @click="run1">变红</button>
    <button @click="run2">变绿</button>
    <div :class="y">hello</div>
</template>

<script setup>
import { ref } from "vue";
// v-bind
//   属性绑定指令
//   指，可以动态给属性赋值

// 用法
//   v-bind:属性值="变量"
//   v-bind:  可以简写 :  
//   即  :属性值="变量"


const x = ref()
const run1 = () => {
    x.value = 'color:red'
}
const run2 = () => {
    x.value = 'color:#00ff00'
}

const y = ref('myC2')

</script>
<style>
.myC1 {
    background: rgb(0, 0, 255);
    color: yellow;
}

.myC2 {
    background: rgb(23, 212, 83);
    color: rgb(18, 19, 113);
}
</style>