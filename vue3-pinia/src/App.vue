<template>
  <div class="nav">
    <router-link to="/counter">计数器</router-link>
    <router-link to="/todo">代办清单</router-link>
    <router-link to="/bill">记账应用</router-link>
    <router-link to="/login">个人中心</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">

</script>

<style scoped>
.nav {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: #CCDDFF;
  border-radius: 10px;
  max-width: 800px;
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