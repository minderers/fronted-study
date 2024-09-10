<template>
    <div>
        <button :disabled="isDisabled">点击</button>
        <img :src="url" alt="">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isDisabled = ref < Boolean > (false)
const url = ref<string>('https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png')
</script>

<style lang="scss" scoped></style>