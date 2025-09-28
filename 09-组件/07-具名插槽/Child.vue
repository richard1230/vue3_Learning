<template>
    <div>我是子组件</div>
    <div>我的名字是：
        <slot name="nameSlot"></slot>
    </div>
    <div>我的年龄是：
        <slot name="ageSlot"></slot>
    </div>
    <div>
        我的爱好：
        <slot name="default"></slot>，
        <slot></slot>
    </div>


</template>

<script setup>


</script>

<style>

</style>