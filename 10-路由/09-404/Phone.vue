<template>
    <div> 我是 {{ dict[msg].name }} 手机 </div>
    <div> 价格 {{ dict[msg].money }} 元</div>
</template>

<script setup>
const props = defineProps(['msg'])
import { reactive } from 'vue'
const dict = reactive(
    {
        'hw': {
            name: '华为',
            money: '3000'
        },
        'oppo': {
            name: 'oppo',
            money: '3500'
        }
    }
)

</script>