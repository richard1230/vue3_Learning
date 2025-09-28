<template>
    <haha></haha>
    <div>{{ num }}</div>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>
    <div>{{ date }}</div>
    <div>{{ msg }}</div>
</template>

<script>

import { ref, computed, watch } from 'vue'
import haha from './start.vue'

export default {
    setup() {
        const num = ref(10);
        function add() {
            num.value++
        }
        function sub() {
            num.value--
        }
        const date = computed(() => {
            return new Date().toLocaleString()
        })
        const msg = ref('5的倍数')
        watch(num, (x, y) => {
            msg.value = (x % 5 == 0) ? '5的倍数' : ''
        })

        return {
            num, add, sub, date, msg
        }
    },
    components: {
        haha
    }
}
</script>

<style></style>