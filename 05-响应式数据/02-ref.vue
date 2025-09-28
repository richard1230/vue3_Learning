<template>
    <div>{{ aa }}</div>
    <div>{{ bb }}</div>
</template>

<script setup>
//  ref
//    用来创建 响应式 对象
//    其原理，是创建 链接
//    其参数，可以是任意类型

// 非响应式
//非响应式
let a = 11;
console.log("首次a: ",a)
let aa = a;
console.log("首次a: ",a)
console.log("首次aa: ",aa)

a = 22;

console.log("二次a: ",a)
console.log("二次aa: ",aa)

// 首次a:  11
// 首次aa:  11
// 二次a:  22
// 二次aa:  11

//响应式

import {ref} from 'vue'

let b = ref(11);
let bb = b

console.log("首次b: ",b)
console.log("首次bb: ",bb)

b.value = 23


console.log("二次b: ",b)
console.log("二次bb: ",bb)

// 首次b:  RefImpl{dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 11, _value: 11}
// App.vue:31 首次bb:  RefImpl{dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 11, _value: 11}
// App.vue:36 二次b:  RefImpl{dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 23, _value: 23}
// App.vue:37 二次bb:  RefImpl{dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 23, _value: 23}

通过ref创建一个变量b

谁依赖于变量b,后面只要b一发生变化,后面都跟着变化

</script>

<style></style>



