<template>
    <div>我是子组件</div>
    <div>我的名字是：
        <slot name="nameSlot" n1="张三" n2="李四"></slot>
    </div>
    <div>我的年龄是：
        <slot name="ageSlot" a1="18" a2="20"></slot>
    </div>

</template>

<script setup>


</script>

<style></style>