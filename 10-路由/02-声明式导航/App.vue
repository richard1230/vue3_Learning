<template>
  <router-link to="/news/abc">新闻</router-link>
  <router-link to="/sports/abc">体育</router-link>
  <hr>
  <router-view></router-view>
</template>

<script setup>
// 声明式导航
//    <router-link>
//        1、路由链接
//        2、底层是  <a> 标签
//        3、to 相当于 <a> 标签 中的  href 属性
//    <router-view>
//        1、路由视图

</script>

<style>

</style>