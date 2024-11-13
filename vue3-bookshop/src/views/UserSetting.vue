<template>
    <div class="box">
        <h3>用户信息设置</h3>
        <button @click="handleLogout">退出登录</button>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
}
</script>
<style scoped>
.box {
    text-align: center;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    background-color: #CCDDFF;
    border-radius: 10px;
    height: 700px;
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
}

h3 {
    color: #9999FF;
}
</style>