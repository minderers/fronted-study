<template>
    <div class="whole">
        <div class="box">
            <span class="hp">血量:{{ hp }}/{{hpmax}} ({{hpPercentage*100}}%)</span>
            <div class="progress">
                <div class="progress-bar" :style="{width: hpPercentage*100 + '%' , background: hpPercentage > 0.5 ? 'green' : 'red'}"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref,computed} from 'vue'

const hp = ref(70)
const hpmax = ref(100)

const hpPercentage = computed(() => {
    return hp.value / hpmax.value
})

</script>

<style scoped>
.whole {
    display: flex;
    justify-content: center;
    align-items: center;
}
.box{
    text-align: center;
    margin-top: 20px;
}
.progress{
    width:1200px;
    height: 20px;
    background-color:#e0e0e0;
    margin-top: 10px;

}
.progress-bar{
    height:20px;
    z-index: 999;
}
</style>