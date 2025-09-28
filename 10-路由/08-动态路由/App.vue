<template>
  <span @click="router.push('/phone/mi')">小米</span> | 
  <span @click="router.push('/phone/hw')">华为</span> |
  <span @click="router.push('/phone/oppo')">oppo</span>
  <hr>
  <router-view></router-view>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
</script>