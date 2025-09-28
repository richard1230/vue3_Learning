<template>
   <input type="text"  value="23" v-model="tx01">
<!--  可以写成下面这种形式-->
    <br>
  <input type="text" v-model="tx02">
  <div>你刚刚输入的是{{tx02}}}</div>
    <input type="text" v-model="tx">
    <div>你刚刚输入的是：{{ tx }}</div>
    <hr>
    <input type="radio" value="A" name="one" v-model="ra">A.篮球
    <input type="radio" value="B" name="one" v-model="ra">B.足球
    <div>你刚刚选择的是：{{ ra }}</div>
    <hr>
    <input type="checkbox" name="mul" v-model="cb" value="A">A.篮球
    <input type="checkbox" name="mul" v-model="cb" value="B">B.足球
    <div>你刚刚选择的是：{{ cb.sort().join('') }}</div>
    <hr>
    <textarea v-model="ta"></textarea>
    <pre>你刚刚输入的是：{{ ta }}</pre>
    <hr>
    <select v-model="sl">
        <option value="">--请选择--</option>
        <option value="bj">北京</option>
        <option value="sh">上海</option>
    </select>

    <hr>
    v-model 的扩展
    <hr>
    <input type="text" v-model.lazy="t1">
    <div>你刚刚输入的是：{{ t1 }}</div>
    <hr>
    <input type="text" v-model.number="t2" placeholder="数字">
    <div>你刚刚输入的是：{{ t2 + 100 }}</div>
    <input type="text" v-model.trim="t3" placeholder="密码">
    <div>你刚刚输入的是：{{ '|' + t3 + '|' }}</div>
</template>

<script setup>
import { ref } from 'vue';

// v-model
//    双向绑定、表单绑定 ⭐
//    用来监听
//              <input type="text">
//              <input type="radio">
//              <input type="checkbox">
//              <textarea>
//              <select>
//         当发生改变时，将标签的 value的值，传递给 v-model
// 手动修改input里面的初始值,假设为666,初始值一改变--->value跟着变--->v-model对应的值tx也跟着变
//tx一变化--->下面的tx=ref(666)里面的666也会跟着变化--->{{tx}},这里面的tx也会跟着变化
//这个就是所谓的双向绑定

// v-model 的扩展
//  lazy   ,  当失去焦点时，才传递数据
//  number ,  将输入的数据，先转数字，再传递
//  trim   ,  将输入的数据，先删除两端空格，再传递

const tx02 = ref(999)
const tx = ref()
const ra = ref()
const cb = ref([]) // 必须是数组
const ta = ref()
const sl = ref('')

const t1 = ref()
const t2 = ref()
const t3 = ref('')

</script>

<style></style>