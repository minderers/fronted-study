<template>
    <div class="box">
        <h2>登录</h2>
        <input v-model="phone" placeholder="请输入手机号" />
        <button @click="sendCode" v-if="!timer">发送验证码</button>
        <button v-else>还剩下{{ count }} 秒</button>
        <input v-model="code" placeholder="请输入验证码" style="margin-left: 10px;" />
        <button @click="login">登录</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/useAuth';

const phone = ref('15906146066')
const code = ref('')

const router = useRouter()
const authStore = useAuthStore()
const count = ref(60);
const timer = ref(false);
const sendCode = async () => {
    let interval: any;
    await authStore.sendCode(phone.value);
    interval = setInterval(() => {
        count.value--;
        timer.value = true;
        if (count.value <= 0) {
            timer.value = false;
            count.value = 60;
            clearInterval(interval);
        }
    }, 1000);
}
const login = async () => {
    await authStore.login(phone.value, code.value)
    router.push('/profile')
}
</script>

<style scoped>
.box {
    font-family: Arial, sans-serif;
    margin: auto;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background-color: #CCDDFF;
    border-radius: 10px;
    max-width: 800px;
    margin-top: 20px;
}

button {
    padding: 5px;
    /* 内边距 */
    background-color: #9999FF;
    /* 按钮背景颜色 */
    color: white;
    /* 按钮文本颜色 */
    border: none;
    /* 无边框 */
    border-radius: 4px;
    /* 按钮圆角 */
    font-size: 16px;
    /* 字体大小 */
    cursor: pointer;
    /* 鼠标悬停时指针变为手型 */
    transition: background-color 0.3s;
    /* 背景颜色过渡效果 */
    margin-left: 10px;
}

input {
    margin-bottom: 10px;
    width: 200px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
}
</style>