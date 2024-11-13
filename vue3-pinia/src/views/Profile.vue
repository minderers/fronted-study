<template>
    <div class="box">
        <h2>欢迎来到个人中心</h2>
        <h2>{{ msg }}</h2>
        <p>昵称: {{ user?.nickname }}</p>
        <img :src="user?.avatar" alt="avatar" width="100" height="100" />
        <p>积分: {{ user?.bonus }}</p>
        <button @click="handleLogout">退出登录</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/useUser';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { user, msg } = storeToRefs(userStore);
const { fetchUser, clearUser } = userStore;

const router = useRouter();

const handleLogout = () => {
    clearUser();
    router.push("/login");
};

onMounted(() => {
    fetchUser();
});
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