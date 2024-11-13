<template>
    <div class="finance-app">
        <h2>记账应用</h2>

        <!-- Form to add a Bill -->
        <div class="form-section">
            <input v-model="newBill.reason" placeholder="描述" />
            <input v-model.number="newBill.bill" type="number" placeholder="金额" />
            <select v-model="newBill.type">
                <option value="income">收入</option>
                <option value="expense">支出</option>
            </select>
            <button @click="addBill">添加记录</button>
        </div>

        <!-- Bill list -->
        <div class="Bills-section">
            <h2>交易记录</h2>
            <ul>
                <li v-for="(Bill, index) in BillStore.Bills" :key="Bill.id">
                    <span>{{ Bill.reason }} - {{ Bill.bill }} ({{ Bill.type }})</span>
                    <button @click="removeBill(index)">删除</button>
                </li>
            </ul>
        </div>

        <!-- Summary information -->
        <div class="summary-section">
            <h2>统计信息</h2>
            <p>总收入: {{ BillStore.totalIncome }}</p>
            <p>总支出: {{ BillStore.totalExpenses }}</p>
            <p>当前余额: {{ BillStore.balance }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useBillStore } from '../store/useBill'

const BillStore = useBillStore()

const newBill = ref({
    type: 'income',
    bill: 0,
    reason: ''
})

const addBill = () => {
    if (newBill.value.reason && newBill.value.bill) {
        BillStore.addBill(newBill.value.type, newBill.value.bill, newBill.value.reason)
        // Reset form
        newBill.value.reason = ''
        newBill.value.bill = 0
        newBill.value.type = 'income'
    } else {
        alert('请填写完整的交易信息')
    }
}

const removeBill = (index) => {
    BillStore.removeBill(index)
}
</script>

<style scoped>
.finance-app {
    font-family: Arial, sans-serif;
    margin: auto;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    background-color: #CCDDFF;
    border-radius: 10px;
    max-width: 800px;
    margin-top: 20px;
}

.form-section {
    margin-bottom: 20px;
}

.form-section input,
.form-section select {
    margin: 0 10px;
    padding: 5px;
    width: 150px;
}

.Bills-section ul {
    list-style: none;
    padding: 0;
}

.Bills-section li {
    margin: 10px 0;
}

.summary-section {
    margin-top: 20px;
}

h2 {
    color: #9999FF;
}

button {
    padding: 5px 10px;
    /* 内边距 */
    background-color: #9999FF;
    /* 按钮背景颜色 */
    color: white;
    /* 按钮文本颜色 */
    border: none;
    /* 无边框 */
    border-radius: 4px;
    /* 按钮圆角 */
    font-size: 16px;
    /* 字体大小 */
    cursor: pointer;
    /* 鼠标悬停时指针变为手型 */
    transition: background-color 0.3s;
    /* 背景颜色过渡效果 */
}
</style>