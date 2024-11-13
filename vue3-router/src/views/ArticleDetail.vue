<template>
    <div class="box">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
        <router-link :to="`/articles/${article.id}/comment`">文章评论</router-link>
    </div>
    <router-view></router-view>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
//接收到路由中的id参数
const articleId = route.params.id
const articles = [
    {
        id: 1,
        title: '如何学习 Vue3',
        content: '学习 Vue3 的方法有很多种，这里列举几种常见的方法：'
    },
    {
        id: 2,
        title: '理解 Vue Router',
        content: 'Vue Router 是 Vue.js 官方的路由管理器，它可以帮助我们实现单页面应用（SPA）的路由功能。'
    }
]

//查找id 为articleId的文章
const article = articles.find((a) => a.id === Number(articleId))
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

h3 {
    color: #9999FF;
}
</style>