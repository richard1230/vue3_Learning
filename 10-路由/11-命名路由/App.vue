<template>
  <router-link :to="{name:'mi'}">小米1</router-link> |
  <router-link :to="{name:'phone',params: { msg: 'hw' }}">华为1</router-link>
  <hr>
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