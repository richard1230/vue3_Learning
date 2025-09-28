<template>
  <div>我是子组件</div>
  <button @click="run1">放大</button>
  <button @click="run2">缩小</button>
  <div :style="{fontSize:x+'px'}">
    看小说。。。。<br>
    看小说。。。。<br>
    看小说。。。。<br>
    看小说。。。。<br>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
const x = ref(15)

const emits = defineEmits('big','small')

const run1 = ()=>{
  x.value++
  emits( 'big'  , x.value  )
}
const run2 = ()=>{
  x.value--
  emits( 'small'  , x.value  )
}

</script>

<style>
</style>