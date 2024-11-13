<template>
    <div>
        <div class="nav">
            <router-link to="/user/profile">用户信息</router-link>
            <router-link to="/user/setting">用户设置</router-link>
        </div>
        <router-view></router-view>
    </div>
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
    margin-top: 20px;
}

a {
    margin: 10px;
    text-decoration: none;
    background-color: #9999FF;
    color: white;
    padding: 5px 10px;
}

.router-link-active {
    background-color: #9f31f9;
    font-weight: bold;
}
</style>