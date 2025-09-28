<template>
  <span @click="router.push({ name: 'mi' })">小米</span> |
  <span @click="router.push({ name: 'phone', params: { msg: 'hw' } })">华为</span> |
  <span @click="router.push({ name: 'phone', params: { msg: 'oppo' } })">oppo</span>
  <hr>
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>