<template>
  <div>您选择了：{{ sheng.name }}{{ shi.name }}{{ xian.name }}</div>

  <select v-model="sheng">
    <option :value="x" v-for="x in shengArr">{{ x.name }}</option>
  </select>
  <br>
  <select v-model="shi">
    <option :value="x" v-for="x in shiArr">{{ x.name }}</option>
  </select>
  <br>
  <select v-model="xian">
    <option :value="x" v-for="x in xianArr">{{ x.name }}</option>
  </select>

</template>

<script setup>
// 1、导入函数
import axios from 'axios'
import { ref, watch } from 'vue'
// 2、创建对象
const axiosApp = axios.create({
  baseURL: '/',
  timeout: 5000
})
// 3、发起请求
const shengArr = ref([])
const shiArr = ref([])
const xianArr = ref([])
const sheng = ref({})
const shi = ref({})
const xian = ref({})

axiosApp.get('/provinces.json').then((res) => {
  shengArr.value = res.data
})

watch(sheng, () => {
  xianArr.value = ''
  shi.value=''
  xian.value=''
  axiosApp.get('/cities.json').then((res) => {
    shiArr.value = res.data.filter((x) => x.provinceCode == sheng.value.code)
  })
})

watch(shi, () => {
  xian.value=''
  axiosApp.get('/areas.json').then((res) => {
    xianArr.value = res.data.filter((x) => x.cityCode == shi.value.code)
  })
})


</script>


<style></style>