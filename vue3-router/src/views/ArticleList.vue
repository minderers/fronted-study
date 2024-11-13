<template>
    <div class="box">
        <h2>文章列表</h2>
        <ul>
            <li v-for="article in articles" :key="article.id">
                <router-link :to="`/articles/${article.id}`">{{ article.title }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
const articles = [
    {
        id: 1,
        title: '如何学习 Vue3',
    },
    {
        id: 2,
        title: '理解 Vue Router',
    }
]

</script>
<script lang="ts">
export default {
    beforeRouteEnter(to, from, next) {
        console.log(to, from);
        console.log('进入该页面前的检查');
        next();
    }
}
</script>
<style>
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
</style>