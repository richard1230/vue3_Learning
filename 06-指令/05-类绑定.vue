<template>
    <div :class="x">hello1</div>
    <div :class="y">hello2</div>
    <div :class="{ myC3: z }">hello3</div>
    <div :class="['myC1', 'myC4']">hello4</div>
</template>


<script setup>
// 类绑定、类属性绑定
import { ref } from 'vue';

// 方式1：字符串方式
const x = ref('myC1')

// 方式2：对象方式
const y = ref({ myC2: true })

// 方式3：插值方式
const z = ref(true)

// 方式4：数组方式
// 数组内类样式，同时生效
</script>

<style>
.myC1 {
    color: red;
}

.myC2 {
    color: green;
}

.myC3 {
    color: blue;
}

.myC4 {
    background: yellow;
}
</style>
