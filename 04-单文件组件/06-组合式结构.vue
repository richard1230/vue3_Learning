<template>
    <div @click="fun">{{ msg }}</div>
</template>


<script>

import { ref, computed, watch } from 'vue'

export default {
    setup() {
        // 数据、变量
        const msg = ref('vue');
        // 函数、方法
        function fun() {
            msg.value = 'hello'
        }
        // 计算属性
        const comp = computed(() => {
        })
        // 监听器
        watch(msg, (x, y) => {
        })
        return {
            msg, fun
        }
    },
    // 组件
    components: {
        // 与选项式一样
    }
}
</script>

<style></style>