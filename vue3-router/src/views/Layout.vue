<template>
    <nav class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/articles">文章</router-link>
        <router-link to="/user">我的</router-link>
    </nav>
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view></router-view>
</template>
<style scoped>
.nav {
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
    background-color: #CCDDFF;
    border-radius: 10px;
}

a {
    margin: 10px;
    text-decoration: none;
    background-color: #3baee0;
    color: white;
    padding: 5px 10px;
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