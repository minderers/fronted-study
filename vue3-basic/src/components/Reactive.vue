<template>
    <div>
        <p>姓名：{{ user.name }}</p>
        <p>年龄：{{ user.age }}</p>
        <button @click="increaseAge">增加年龄</button>
    </div>
</template>

<script setup lang="ts">
import {  reactive } from 'vue'
const user = reactive<{ name: string, age: number }>({
    name: '张三',
    age: 30
})

const increaseAge = ():void => {
    user.age++
}
</script>

<style scoped>

</style>