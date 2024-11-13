<template>
    <div class="box">
        <h2>Comments</h2>
        <div v-for="comment in article.comments" :key="comment.id">
            <p>{{ comment.content }}</p>
        </div>
        <form @submit.prevent="addComment">
            <input v-model="newComment" type="text" placeholder="Add a comment" />
            <button type="submit" style="margin-left: 10px;">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useRoute } from 'vue-router'
const route = useRoute()
//接收到路由中的id参数
const articleId = route.params.id
const articles = [
    {
        id: 1,
        title: '如何学习 Vue3',
        content: '学习 Vue3 的方法有很多种，这里列举几种常见的方法：',
        comments: [{
            id: 1,
            content: '多看官方文档'
        },
        {
            id: 2,
            content: '多写代码'
        },
        {
            id: 3,
            content: '多看视频教程'
        }
        ]
    },
    {
        id: 2,
        title: '理解 Vue Router',
        content: 'Vue Router 是 Vue.js 官方的路由管理器，它可以帮助我们实现单页面应用（SPA）的路由功能。',
        comments: [
            {
                id: 1,
                content: '多看官方文档'
            },
            {
                id: 2,
                content: '多写代码'
            },
            {
                id: 3,
                content: '多看视频教程'
            }
        ]
    }
]

const article = ref(articles.find(a => a.id === parseInt(articleId)));
const comments = ref(article.value.comments);
const newComment = ref('');

const addComment = () => {
    if (newComment.value.trim()) {
        comments.value.push({ id: Date.now(), content: newComment.value });
        newComment.value = '';
    }
};
</script>
<style scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    background-color: #CCDDFF;
    border-radius: 10px;
}

h2 {
    color: #9999FF;
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
</style>