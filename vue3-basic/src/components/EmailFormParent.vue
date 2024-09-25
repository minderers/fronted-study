<template>

    <body>
        <div class="email-form-parent">
            <EmailForm @send-form="handleSubmit" />
            <p v-if="sendData">邮件信息：{{ sendData }}</p>
        </div>
    </body>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import EmailForm from './EmailForm.vue'
import axios from 'axios'
const sendData = ref(null)
const handleSubmit = (data: any) => {
    sendData.value = data
    axios.post("http://localhost:8080/mail", sendData.value).then((res) => {
        console.log("邮件已发送")
    })
}
</script>

<style scoped>
body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #AEEEEE;
    z-index: -1;
}

.email-form-parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 98vh;
}
</style>