<template>
    <div class="email-form">
        <form @submit.prevent="sendForm">
            <h3>发送邮件</h3>
            <input type="text" placeholder="请输入收件人邮箱" v-model="form.to" />
            <input type="text" placeholder="请输入邮件主题" v-model="form.subject" />
            <input type="text" placeholder="请输入邮件内容" v-model="form.body">
            <button type="submit">发送</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const form = reactive({
    to: '',
    subject: '',
    body: ''
})
const emit = defineEmits<{ "sendForm": [any] }>()
const sendForm = () => {
    emit("sendForm", form)
}
</script>

<style scoped>
.email-form {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    background-color: #fff;
}

form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input {
    width: 300px;
    height: 40px;
    margin-bottom: 20px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    width: 100px;
    height: 40px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
</style>