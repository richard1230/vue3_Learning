<template>
  <div @click.once="c++">单击+1, {{ c }}</div>
  <hr>
  <a href="https://www.baidu.com" @click.prevent.once="c++">百度</a>
  <hr>
  <div @click="mySS='background:yellow'" :style="mySS">
    父标签
    <div @click.stop="myS='color:red'" :style="myS">子标签</div>
  </div>
  <hr>
  <div @click.self="mySS2='background:green'" :style="mySS2">
    父标签
    <div @click="myS2='color:blue'" :style="myS2">子标签</div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

// 事件修饰符
//  常见的：
//    once      只执行一次
//    prevent   阻止默认事件
//    stop      停止事件，停止事件冒泡（在子标签上面添加stop事件）
//    self      自身触发事件（在父标签上面添加self事件）
//    passive   滚动优化，当页面内容过多，移动端滚动时，可能会卡顿
//               @scroll.passive = '函数'

//  附注：
//    事件冒泡：子标签触发事件时，会向上传递给父亲
const c = ref(10)
const myS = ref()
const mySS = ref()
const myS2 = ref()
const mySS2 = ref()
</script>

<style>

</style>