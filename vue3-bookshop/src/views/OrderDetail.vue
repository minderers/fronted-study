<template>
    <div class="order-details">
      <h2>订单详情</h2>
      <div v-if="order">
        <p>订单ID: {{ order.id }}</p>
        <div v-for="(item, index) in order.items" :key="index">
            <div class="cart-item">
                <div class="cart-left">
                    <img :src="item.img" alt="item.title" class="cart-image" />
                <p style="margin-left:10px">{{ item.title }}</p>
                </div>
          <div class="cart-info">
            <p>数量：{{ item.quantity }}</p>
            <p>价格：{{ item.price }} 元</p>
          </div>
            </div>
        </div>
        <p>总价: {{ order.total }} 元</p>
      </div>
      <div v-else>
        <p>订单不存在或已过期。</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const order = ref(null);
  
  onMounted(() => {
    const orderId = route.params.orderId;
    const orderData = localStorage.getItem('order' + orderId);
    if (orderData) {
      order.value = JSON.parse(orderData);
    } else {
      alert('订单不存在或已过期。');
    }
  });
  </script>
  
  <style scoped>
  .order-details {
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
  img{
    width:120px;
    height:120px;
  }
  .cart-item{
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    background-color: #beb3fc;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }
  </style>