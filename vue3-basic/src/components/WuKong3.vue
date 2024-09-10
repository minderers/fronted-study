<template>
    <div class="whole">
        <div class="box">
        <h3>技能列表</h3>
        <ul>
            <li v-for="skill in skills" :key="skill.id" :class="{active:skill.status}">
                {{skill.name}} - 
                <span v-if="skill.status" style="color:green">已解锁</span>
                <span v-else style="color:red">未解锁</span>
            </li>
        </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill{
    id:number,
    name:string,
    status:boolean
}

const skills = ref<Skill[]>([
    {id:1,name:'七十二变',status:true},
    {id:2,name:'火眼金精',status:false},
    {id:3,name:'筋斗云',status:true}
])
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
ul{
    list-style: none;
}
li{
    margin: 10px 0;
}
</style>