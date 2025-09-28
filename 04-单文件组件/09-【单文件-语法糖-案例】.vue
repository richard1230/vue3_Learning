<template>
    <start></start>
    <div>1+1=?</div>
    <button @click="run">{{ show }}答案</button>
    <div>{{ ans }}</div>
    <div>{{ myTime }}</div>
    <div>{{ o }}--&gt;{{ n }}</div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import start from './start.vue'
const ans = ref()
let flag = false
const show = ref('显示')
const run = () => {
    flag = !flag
    ans.value = (flag) ? 2 : ''
    show.value = (flag) ? '隐藏' : '显示'
}
const myTime = computed(() => {
    return new Date().toLocaleTimeString()
})
const o = ref()
const n = ref()
watch(ans, (x, y) => {
    o.value = y
    n.value = x
})

</script>


<style></style>