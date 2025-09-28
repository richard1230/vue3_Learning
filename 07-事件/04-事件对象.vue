<template>
  <div @click="run(11,22,$event)" >求和:{{ sum }}</div>
  <div @click="run2" >你好</div>
  <hr>
  <textarea @keydown="run3"></textarea>
  <div>您输入的是:{{ tt }}</div>
  <hr>
  <div class="box1" @mousemove="run4($event)">
    <div>x:{{ x1 }}，{{ x2 }} </div>
    <div>y:{{ y1 }}，{{ y2 }} </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 事件对象( event )
//    $event  是系统内置的参数,可以调用 JS 的DOM方法
//    $event 对象, 有以下的属性

//    e.target   指向DOM标签(相当于document.getElementById())
//    e.key      捕获键盘按键
//    e.screenX  获取鼠标指针 在屏幕的X坐标
//    e.screenY  获取鼠标指针 在屏幕的Y坐标
//    e.clientX  获取鼠标指针 在浏览器的X坐标
//    e.clientY  获取鼠标指针 在浏览器的Y坐标

// 重点
//  @click="run($event)"   完整写法
//  @click="run"           系统会传递一个参数  $event
//  @click="run(11,22)"    系统会传递11,22 不会传递 $event
//  @click="run()"         系统不会传递任何参数



//   浏览器的坐标 左上角为 (0,0)
//   往右、右下 为正方向

const sum = ref()
const run = (a,b,e)=>{
  sum.value = a+b
  e.target.style.color='red'
}

const run2 = (e)=>{
  e.target.style.color='blue'
}
const tt = ref('')
const run3 = (e)=>{
  tt.value += e.key
  if(tt.value.length>20){
    tt.value=''
  }
}

const x1 = ref()
const y1 = ref()
const x2 = ref()
const y2 = ref()
const run4 = (e)=>{
  x1.value = e.clientX
  y1.value = e.clientY
  x2.value = e.screenX
  y2.value = e.screenY
}

</script>

<style>
.box1{
  background: #bfd52f;
  width: 200px;
  height: 200px;
  text-align: left;
  position: fixed;
  left: 0px;
}
</style>