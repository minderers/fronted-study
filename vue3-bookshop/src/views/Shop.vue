<template>
    <div class="cart-container">
        <h2>购物车</h2>
        <div v-if="cart.length === 0" class="empty-cart">
            购物车为空
        </div>
        <div v-else class="cart-items">
            <div v-for="(item, index) in cart" :key="item.id" class="cart-item">
                <img :src="item.img" alt="item.title" class="cart-image" />
                <div class="cart-info">
                    <h3>{{ item.title }}</h3>
                    <p>作者：{{ item.author }}</p>
                    <p>价格：{{ item.price }}</p>
                    <button @click="incrementQuantity(item)">+</button>
                    <button @click="decrementQuantity(item)" style="margin-left: 20px;">-</button>
                    <p>数量：{{ item.quantity }}</p>
                    <button @click="removeFromCart(index)">移除</button>
                </div>
            </div>
        </div>
        <div class="cart-total">
            <p>总计：{{ total }} 元</p>
        </div>
        <button @click="generateOrder">生成订单</button>
    </div>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const cart = ref([]);

// 从localStorage加载购物车数据
const loadCart = () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        cart.value = JSON.parse(cartData);
    }
};

// 移除购物车中的书籍
const removeFromCart = (index) => {
    cart.value.splice(index, 1);
    saveCart();
};

// 增加购物车中的书籍数量
const incrementQuantity = (item) => {
    const index = cart.value.findIndex(b => b.id === item.id);
    if (index !== -1) {
        cart.value[index].quantity += 1;
        saveCart();
    }
};

// 减少购物车中的书籍数量
const decrementQuantity = (item) => {
    const index = cart.value.findIndex(b => b.id === item.id);
    if (index !== -1 && cart.value[index].quantity > 1) {
        cart.value[index].quantity -= 1;
        saveCart();
    }
};

// 保存购物车数据到localStorage
const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
};

// 计算购物车总价
const total = computed(() => {
    return cart.value.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
});

// 将价格字符串转换为数字
// const priceAsNumber = (price) => {
//     return parseFloat(price.replace('¥', ''));
// };

const router = useRouter(); // 使用 Vue Router 的 useRouter 钩子

const generateOrder = () => {
    if (cart.value.length === 0) {
        alert('购物车为空，无法生成订单！');
        return;
    }

    const orderId = Date.now(); // 使用时间戳作为订单ID
    // 创建订单对象
    const order = {
        id: orderId,
        items: cart.value.map((item) => ({ ...item, quantity: item.quantity })), // 复制购物车中的书籍和数量
        total: total.value,
        createdAt: new Date().toISOString(), // 订单创建时间
    };

    // 保存订单到localStorage
    localStorage.setItem('order' + orderId, JSON.stringify(order));

    // 导航到订单详情子路由
    router.push('/Shop/order/' + order.id);
};

// 在组件挂载时加载购物车数据
onMounted(() => {
    loadCart();
});
</script>

<style scoped>
.cart-container {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background-color: #CCDDFF;
    border-radius: 10px;
    max-width: 1600px;
    margin-top: 20px;
}

h2 {
    color: #9999FF;
}

.empty-cart {
    text-align: center;
    margin-top: 20px;
}

.cart-items {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
}

.cart-item {
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    background-color: #beb3fc;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.cart-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
}

.cart-info {
    flex-grow: 1;
}

.cart-total {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
}

button {
    padding: 5px 10px;
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