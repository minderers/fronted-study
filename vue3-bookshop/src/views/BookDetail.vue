<template>
    <div class="box">
        <h2>书籍详情页</h2>
        <img :src="book.img" alt="">
        <p>书籍标题:{{ book.title }}</p>
        <p>作者:{{ book.author }}</p>
        <p>简要内容：{{ book.content }} </p>
        <p>价格: {{ book.price }}</p>
        <button>加入购物车</button>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
//接收到路由中的id参数
const bookId = route.params.id
const books = [
    {
        id: 1,
        title: "C++",
        author: "张海龙",
        price: "35.00",
        img: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/C%2B%2B.png",
        content: "C++是一门非常强大的编程语言"
    },
    {
        id: 2,
        title: "天龙八部",
        author: "金庸",
        price: "125.00",
        img: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E5%A4%A9%E9%BE%99%E5%85%AB%E9%83%A8.png",
        content: "天龙八部是一部非常经典的武侠小说"
    },
    {
        id: 3,
        title: "三国演义",
        author: "罗贯中",
        price: "45.00",
        img: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89.png",
        content: "三国演义是一部非常经典的小说"
    },
]

//查找id 为articleId的文章
const book = books.find((a) => a.id === Number(bookId))
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
}

h2 {
    color: #9999FF;
}

img {
    width: 300px;
    height: 400px;
    border-radius: 10px;
}

p {
    color: #6666FF;
    font-size: 20px;
    font-weight: bold;
}

button {
    background-color: #9999FF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
}

button:hover {
    background-color: #6666FF;
}
</style>