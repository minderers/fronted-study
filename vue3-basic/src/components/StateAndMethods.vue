<template>
    <div>
        <p>当前用户：{{ user.name }},年龄：{{ user.age }}</p>
        <button @click="changeName('李四')">修改用户名</button>
        <button @click="resetUser">重置用户信息</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const user = reactive({
    name: '张三',
    age: 18
})

const changeName = (Newname: string) => {
    user.name = Newname
}

const resetUser = () => {
    user.name = '张三'
    user.age = 30
}
</script>

<style scoped></style>