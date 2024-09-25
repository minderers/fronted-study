<template>
    <el-container>
        <el-header>
            <h1>搜索页面</h1>
        </el-header>
        <el-main>
            <el-input v-model="searchQuery" placeholder="请输入搜索内容" clearable @input="handleSearch" />
            <el-table :data="filteredData" border>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="age" label="年龄" width="100"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchQuery = ref('');
const tableData = ref([
    { name: '张三', age: 28, address: '北京市' },
    { name: '李四', age: 34, address: '上海市' },
    { name: '王五', age: 22, address: '广州市' },
    { name: '赵六', age: 30, address: '深圳市' },
]);

const filteredData = computed(() => {
    return tableData.value.filter(item =>
        item.name.includes(searchQuery.value)
    );
});

const handleSearch = () => {
    // 可以在这里添加额外的搜索逻辑
};
</script>

<style>
.el-header {
    background-color: #f5f7fa;
    text-align: center;
}
</style>