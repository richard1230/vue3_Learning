<template>
  <div>我是父组件</div>
  <hr>
  <Child>
    <template v-slot:nameSlot>王五</template>
    <template #ageSlot>20</template>
    <template #default>爱足球</template>
  </Child>
</template>

<script setup>
// 具名插槽
//    1、具有的名字的插槽
//    2、父组件，就可以 根据 对应插槽名，进行传值

// 用法
//    1、在子组件中，通过 <slot name="插槽名"></slot>
//        1、若子组件插槽，没有名字，相当于 <slot name="default"></slot>
//    2、在父组件中， 在子组件标签 中
//        1、通过 <template v-slot:"插槽名"> 标签进行 指定名字的插槽 传值
//        2、简写：   v-slot: 可以简写为  #  
//        3、即：<template #插槽名>插槽值</template>


import Child from './Child.vue';

</script>

<style>
</style>