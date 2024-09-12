<template>
    <div>
        <p>当前计数：{{ count }}</p>
        <button @click="incrementBy(5)">增加5</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const incrementBy = (value: number): void => {
    count.value += value
}
</script>

<style scoped></style>