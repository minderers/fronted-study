<template>
    <div class="whole">
        <view class="box">
            <h2 :class=" {isHighLight: isHighLight} ">当前形态：{{isHighLight ? '斗战胜佛' : '齐天大圣'}}</h2>
        <button @click="toggleClass">切换形态</button>
        </view>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isHighLight = ref(false)
const toggleClass = () => {
    isHighLight.value = !isHighLight.value
}
</script>

<style scoped>
.whole {
    display: flex;
    justify-content: center;
    align-items: center;
}
.box{
    text-align: center;
    width: 1200px;
    border-radius: 10px;
    box-shadow: 0 0 10px #000000;
}

button{
    margin:20px;
    background-color: red;
    color: white;
    font-size: 20px;
    border-radius: 10px;
}
</style>