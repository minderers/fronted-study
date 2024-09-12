<template>
    <div class="whole">
        <div class="box">
            <h1 class="title">装备管理</h1>
            <div class="add">
                <input type="text" placeholder="请输入装备名称" v-model="equips.name">
                <input type="url" placeholder="请输入装备图片链接" v-model="equips.imgUrl" style=" margin-left:10px">
                <button @click="addEquip" class="add-button">添加装备</button>
            </div>
            <ul>
                <li>
                    <div class="list1">
                        <span>图片</span>
                        <span style="margin-left: 30px;">装备名称</span>
                        <span>操作</span>
                    </div>
                </li>
                <li v-for="equip in equips" :key="equip.id">
                    <div class="list">
                        <img :src="equip.imgUrl" alt="装备图片" class="equip-image">
                        <span class="name">{{ equip.name }}</span>
                        <button class="delete" @click="deleteEquip(equip.id)">删除</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface equip {
    id: number;
    name: string;
    imgUrl: string;
}
const equips = ref<equip[]>([]);
const addEquip = () => {
    const newEquip: equip = {
        id: equips.value.length + 1,
        name: equips.value.name,
        imgUrl: equips.value.imgUrl
    };
    equips.value.push(newEquip);
}
const deleteEquip = (id: number) => {
    equips.value = equips.value.filter((equip) => equip.id !== id);
}
</script>

<style scoped>
.whole {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    text-align: center;
    background-color: #98F5FF;
    border-radius: 10px;
    box-shadow: 0 0 10px #000000;
    padding: 20px;
    width: 1200px;
    height: 600px;
}

h1 {
    font-size: 30px;
    margin-bottom: 20px;
}

ul {
    list-style: none;
}

li {
    margin: 10px 0;
}

.list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 200px;
}

.list1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 240px;
    font-size: 20px;
}

.add {
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
}

.delete {
    background-color: #0670fe;
    color: #FFFFFF;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button {
    margin-left: 20px;
}

.add-button {
    background-color: #0670fe;
    color: #FFFFFF;
    border: none;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
}

input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    font-size: 16px;
    width: 200px;
}

.equip-image {
    width: 100px;
    height: 100px;
    margin: 10px;
    border-radius: 50%;
    object-fit: cover;
}

.name {
    font-size: 24px;
}
</style>