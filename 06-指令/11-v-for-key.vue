<template>
  <div>喜欢的球类运动：</div>
  <button @click="arr.splice(1, 1)">删除第二个</button>
  <div v-for="(x,i) in arr" :key="x.id">{{ "这个是x: "+x }}</div>
</template>

<script setup>
// :key
//    当 v-for 遍历的容器，数据量过大时
//    其 插入 或 删除 要耗费大量时间
//    原因时: 数组属于 顺序存储
//    通过 :key="固定唯一值"  去优化此问题3
// 
//    建议:  每个 v-for 都配合 :key 进行优化!!!!!!!!
//    禁止:  用 v-for 中的 索引下标,就是不能将其当作 :key 的值
//    原因:  其下标,动态可变, 虽然不报错,但没有优化效果,但是:key的值一定要是固定的!!!!!

import { ref } from 'vue';
const arr = ref([])

for (let i = 0; i < 100000; i++) {
  arr.value.push({ id: i, data: '球' + i });

}


</script>
<style></style>