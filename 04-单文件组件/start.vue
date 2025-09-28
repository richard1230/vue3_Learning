<template>
    <a href="https://www.baidu.com">{{ msg}}</a> | 
    <a href="https://www.163.com">163</a> | 
    <a href="https://www.sina.com.cn">sina</a>
</template>


<script>
export default {
    data(){
        return {
            msg:'百度'
        }
    }
}

</script>

<style>
a:link{
    color:red;
}
</style>