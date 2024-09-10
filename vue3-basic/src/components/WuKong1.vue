<template>
    <div class="whole">
        <view class="box">
            <p class="name">{{name}}</p>
            <p class="title">{{title}}</p>
            <p class="dec">{{dec}}</p>
        </view>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const name = ref('孙悟空')
const title = ref('齐天大圣')
const dec = ref('在西游记中，孙悟空是一个勇敢无畏、机智聪明的角色，以其强大的能力和不屈的精神著称')
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
    background-color: #98F5FF;
    border-radius: 10px;
    box-shadow: 0 0 10px #000000;
}
.name{
    font-weight: bold;
    font-size: 24px;
}
.title{
    font-size:20px;
}
.dec{
    font-size: 18px;
}
</style>