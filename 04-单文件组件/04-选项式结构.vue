<template>
    <div id="dd">{{ msg }}</div>
</template>

<!-- 
vue项目，文件扩展名，.vue
.vue 文件，分为三部分
- <template></template>  写html5
- <script></script>      写js
- <style></style>        写css
插件
- component previewer
-->

<script>
export default {
    // 数据、变量
    data() {
        return {
            msg: 'hello vue'
        }
    },
    // 方法、函数
    methods: {
    },
    // 计算属性
    computed: {
    },
    // 监听器
    watch: {
    },
    // 组件
    components: {

    }
}
</script>

<style>
#dd {
    color: red;
}
</style>