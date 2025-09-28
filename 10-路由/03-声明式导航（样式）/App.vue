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
//        4、当链接激活时(就是我们鼠标点击哪个链接的时候)，系统会自动添加 class="router-link-active"
//    <router-view>
//        1、路由视图
//    <style>
//        1、默认 其样式，全局生效
//        2、<style scoped> 则只对当前本vue文件生效



</script>

<style scoped>
.router-link-active{
  background: #000;
}
</style>