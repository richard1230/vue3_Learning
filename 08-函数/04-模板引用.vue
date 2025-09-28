<template>
  <div ref="myDiv">  你好1</div>
  <div id="dd">      你好2</div>
  <div :style="myS"> 你好3</div>
  <div :class="myC"> 你好4</div>
  <div @mouseover="run($event)">你好5</div>
</template>

<script setup>

// 模板引用（ref属性）
//    1、用来操作DOM
//    2、其初始值，必须为 ref(null)
//    3、通过 .value 调用 DOM方法
//    4、要在 onMounted() 中使用

import { onMounted, ref } from 'vue';
const myDiv = ref(null)
onMounted(()=>{
  myDiv.value.style.color = 'red'
  document.getElementById('dd').style.color='blue'
})

const myS = ref('color:green')
const myC = ref('org-style')

const run =(e)=>{
  e.target.style.color = 'pink'
}


</script>

<style>
.org-style{
  color: orange;
}
</style>