<template>
    <div>
        <h2>当前用户：{{ userName }}</h2>
        <h2>2+3的结果：{{ 2 + 3 }}</h2>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const userName = ref < String > ('张三')
console.log(userName.value)
</script>

<style lang="scss" scoped></style>