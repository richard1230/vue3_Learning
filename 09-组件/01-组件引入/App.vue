<template>
  <myChild></myChild>    <!-- 先寻找js中 小驼峰，再大驼峰 -->
  <MyChild></MyChild>    <!-- 只寻找js中 大驼峰 -->
  <my-child></my-child>  <!-- 先寻找js中 小驼峰，再大驼峰 -->
  <mychild></mychild>    <!-- 只寻找js中 全小写 -->
  <MYCHILD></MYCHILD>    <!-- 只寻找js中 全小写 -->
  <hr>
  <div>我是父组件</div>
</template>

<script setup>
// 组件（component）
//    1、vue文件，就是组件
//    2、组件引入，一个vue 通过 import 调用另外一个vue
//    3、vue文件 建议使用 大驼峰
//          小驼峰  myDivSpan    ( java、js  风格 )
//          大驼峰  MyDivSpan    ( java、js  风格 )
//          短横线  my-div-span  ( css、html 风格 )
//          下滑线  my_div_span  ( python    风格 )
//    4、组件引入后的名字，可以自定义
//    5、引入的组件，当作 自定义标签名

import myChild from './Child.vue'

</script>

<style>
</style>