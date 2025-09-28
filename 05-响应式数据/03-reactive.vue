<template>
    <div>{{ cat }}</div>
    <div>{{ dog }}</div>
    <div>{{ aa }}</div>
</template>

<script setup>
// reactive
//    用来 创建 响应式 对象
//  
//   ref
//        其参数，是任意类型，都是响应式
//   reactive
//        其参数：
//        若 为 基本数据类型（非对象）， 则 为 非响应式
//        若 为 对象数据（大括号的数据），则 为 响应式
//  建议：
//      {}对象数据，使用 reactive
//      非{}对象数据，使用 ref





const cat = ref({Name:"Tom",age:6})

cat.value.age++


const dog =reactive({Name:"Wangcai",age:8})

dog.age++

//结果:
// { "Name": "Tom", "age": 7 }
// { "Name": "Wangcai", "age": 9 }

let c = ref(23)
let cc = c

console.log("首次c: ",c)
console.log("首次cc: ",cc)

c.value= 666

console.log("二次c: ",c)
console.log("二次cc: ",cc)




let d = reactive(998)
let dd = d
console.log("首次d: ",d)
console.log("首次dd: ",dd)
d = 888

console.log("二次d: ",d)
console.log("二次dd: ",dd)


// 首次d:  998
//  首次dd:  998
//  二次d:  888
//  二次dd:  998


//页面显示结果
// 666
// 998

</script>
<style></style>