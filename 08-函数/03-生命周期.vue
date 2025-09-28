<template>
  <div id="dd">你好</div>
  <button @click="run">单击+1，{{ c }}</button>
</template>


<script setup>

// 生命周期，vue的运行，有一定的顺序
//    1、先执行 <script> 的 setup
//           1、导入内存

//    2、再执行 挂载 操作
//           1、先执行 挂载前 onBeforeMount()
//           2、再执行 挂载中
//           3、再执行 挂载后 onMounted() ⭐

//    3、再执行 更新 操作
//           0、内存的 响应式数据发生改变
//           1、先执行 更新前 onBeforeUpdate()
//           2、再执行 更新中
//           3、再执行 更新后 onUpdated() ⭐

//    4、再执行 卸载 操作
//           1、先执行 卸载前 onBeforeUnmount()
//           2、再执行 卸载中 
//           3、再执行 卸载后 onUnmounted()


import { onBeforeMount, onMounted, ref,onBeforeUpdate,onUpdated} from 'vue';
onBeforeMount(()=>{
  // 此时，还没有标签，不能调用 DOM 操作
  // document.getElementById('dd').style.color = 'red'
})
onMounted(()=>{
  document.getElementById('dd').style.color = 'red'
})

const c = ref(100)
const run = ()=>{
  c.value++               // 先在内存中，将 c 改为 101
  console.log('内存改变')
}
onBeforeUpdate(()=>{
  console.log('更新前')
})

onUpdated(()=>{
  console.log('更新后')
})


</script>

<style>
</style>

