<template>
    <div class="whole">
        <div class="box">
            <h2>黑神话面板</h2>
            <div class="body">
                <div class="box1">
                <div>
            基础攻击力：
            <input
                v-model="baseAttack"
                type="number"
            />
        </div>
        <div>
            装备加成：
            <input
                v-model="gearBonus1"
                type="number"
                />
        </div>
        <div>
            总攻击力：{{totalAttack}}
        </div>
            </div>
            <div class="box2">
                <div>
            基础防御力：
            <input
                v-model="baseAffend"
                type="number"
            />
        </div>
        <div>
            装备加成：
            <input
                v-model="gearBonus2"
                type="number"
                />
        </div>
        <div>
            总防御力：{{totalAffend}}
        </div>
            </div>
            </div>
            <h2>总战力值：{{ total }}</h2>
        </div>
    </div>

</template>

<script setup lang="ts">
import {ref,computed} from 'vue'
const baseAttack = ref(50)
const baseAffend = ref(50)
const gearBonus1 = ref(20)
const gearBonus2 = ref(20)

const totalAttack = computed(() => baseAttack.value + gearBonus1.value)
const totalAffend = computed(() => baseAffend.value + gearBonus2.value)
const total = computed(() => totalAttack.value + totalAffend.value)
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
    background-color: #ddf7ff;
    border-radius: 10px;
    box-shadow: 0 0 10px #000000;
}
.body{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 300px;
}
.box1,.box2{
    border: 1px solid #000000;
    border-radius: 10px;
    width: 300px;
    text-align: center;
    margin: 20px;
    padding: 20px;
}
.box1{
    background-color: #ffdfdf;
}
.box2{
    background-color: #dfffdf;
}

</style>