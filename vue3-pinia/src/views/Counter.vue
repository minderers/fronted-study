<template>
    <div class="box">
        <h2>计数器：{{ counterStore.count }}</h2>
        <h2>双倍计数：{{ counterStore.doubleCount }}</h2>
        <button @click="counterStore.increment">增加</button>
        <button @click="counterStore.decrement">减少</button>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/useCounter';

const counterStore = useCounterStore();
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
</style>