<template>
  <button @click="gd++">功德+1，{{ gd }}</button>
  <div>功德变化： {{ oldv }} --&gt; {{ newv  }}</div>
  <br>
    <button @click="addfire">战斗值+10:{{fire}}</button>
  <div>战斗力变化:{{oldfire}} ---->{{newfire}}</div>

  <hr>

  <div>{{ cat }}</div>
  <button @click="cat.myAge++">明年</button>
  <div>年龄变化： {{ ov }} --&gt; {{ nv  }}</div>
  
</template>

<script setup>
// 监听器（watch）
// 用法
//   watch( 要监听的数据 , (新的值,老的值)=>{发生后的操作}  ,  附加选项)

// 注意----》重要知识点!!!!!!!!!!
//   要监听的数据 若为 基本数据类型，直接监听
//   要监听的数据 若为 对象中的数据，则 通过匿名函数 进行监听


import {reactive, ref, watch} from 'vue'
const gd = ref(100)
const oldv = ref()
const newv = ref()
watch(  gd , (n,o)=>{
  oldv.value  = o
  newv.value  = n
} )


let fire = ref(100)
const oldfire = ref()
const newfire = ref()

const addfire = ()=>{
  fire.value = fire.value + 10
}

watch(fire,(n,o)=>{
  newfire.value = n
  oldfire.value = o
})


const cat = reactive({myName:'Tom',myAge:8})
const ov = ref()
const nv = ref()
watch(  ()=> cat.myAge,  (n,o)=>{
  ov.value  = o
  nv.value  = n
} )
</script>

<style>

</style>