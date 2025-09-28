<template>
    <start></start>
    <div>{{ num }}</div>
    <button @click="add">+1</button>
    <div>奇偶性：{{ jo }}</div>
    <div>{{ oldv }} --&gt; {{ newv }}</div>
</template>

<script>

import start from './start.vue'

export default {
    data() {
        return {
            num: 10,
            oldv: undefined,
            newv: null
        }
    },
    methods: {
        add() {
            this.num++;
        }
    },
    computed: {
        jo() {
            return (this.num % 2 == 0) ? '偶数' : '奇数';
        }
    },
    watch: {
        num(x, y) {
            this.oldv = y;
            this.newv = x;
        }
    },
    components: {
        start
    }

}
</script>

<style></style>