<template>
    <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/Books">图书列表</router-link>
        <router-link to="/Shop">购物车</router-link>
        <router-link to="/user">我的</router-link>
    </nav>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
    <!-- <router-view></router-view> -->
</template>
<style scoped>
.nav {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background-color: #CCDDFF;
    border-radius: 10px;
    max-width: 1600px;
}

a {
    text-decoration: none;
    background-color: #3baee0;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 0 10px;
    font-size: 16px;
    font-weight: bold;
}

.router-link-active {
    background-color: #3643d7;
    font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>