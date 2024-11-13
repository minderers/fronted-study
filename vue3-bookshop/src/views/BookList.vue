<template>
    <div class="box">
        <div class="title">
            <h2>图书列表</h2>
        </div>
        <div class="book-list">
            <div v-for="book in books" :key="book.id">
                <div class="book-item">
                    <router-link :to="`/books/${book.id}`">
                        <img :src="book.img" alt="book.title" />
                    </router-link>
                    <h3>{{ book.title }}</h3>
                    <p>{{ book.author }}</p>
                    <p>{{ book.price }}</p>
                    <button @click="addToCart(book)">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
const books = [
    {
        id: 1,
        title: "C++",
        author: "张海龙",
        price: "35.00",
        img: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/C%2B%2B.png",
    },
    {
        id: 2,
        title: "天龙八部",
        author: "金庸",
        price: "125.00",
        img: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E5%A4%A9%E9%BE%99%E5%85%AB%E9%83%A8.png",
    },
    {
        id: 3,
        title: "三国演义",
        author: "罗贯中",
        price: "45.00",
        img: "https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89.png",
    },
]
// 购物车数据，用于存储用户加入购物车的书籍
const cart = ref([]);

// 从localStorage加载购物车数据
const loadCart = () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        cart.value = JSON.parse(cartData);
    }
};

// 将书籍添加到购物车的方法
const addToCart = (book) => {
    // 检查书籍是否已经在购物车中
    const existingBook = cart.value.find(b => b.id === book.id);
    if (existingBook) {
        // 如果书籍已存在，增加数量
        existingBook.quantity += 1;
    } else {
        // 如果书籍不在购物车中，添加新的书籍对象，并设置数量为1
        cart.value.push({ ...book, quantity: 1 });
    }
    // 保存购物车数据到localStorage
    saveCart();
};

// 保存购物车数据到localStorage
const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
};

// 在组件挂载时加载购物车数据
onMounted(() => {
    loadCart();
});
</script>
<style scoped>
.box {
    text-align: center;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    background-color: #CCDDFF;
    border-radius: 10px;
    height: 600px;
}

h2 {
    color: #9999FF;
}

.book-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
}

.book-item {
    img {
        width: 200px;
        height: 200px;
    }

    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    background-color: #beb3fc;
    text-align: center;
    transition: all 0.3s ease-in-out;
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