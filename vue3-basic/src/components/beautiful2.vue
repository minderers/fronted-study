<template>
    <div class="whole">
        <div class="banner">
            <div class="input">
                <el-input placeholder="搜索" :prefix-icon="Search" />
            </div>

            <div class="menu">
                <el-menu mode="horizontal" hide-on-click="false">
                    <el-menu-item class="m-item">
                        <el-icon>
                            <House />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item class="m-item">
                        <el-icon>
                            <Star />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item class="m-item">
                        <el-icon>
                            <Monitor />
                        </el-icon>
                    </el-menu-item>
                    <el-menu-item class="m-item">
                        <el-icon>
                            <Message />
                        </el-icon>
                    </el-menu-item>
                </el-menu>
            </div>
            <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <div class="banner-foot">
                <div class="box">
                    <el-icon>
                        <MostlyCloudy />
                    </el-icon>
                </div>
                <div class="box">
                    <el-icon>
                        <Setting />
                    </el-icon>
                </div>
                <div class="box">
                    <el-icon>
                        <Moon />
                    </el-icon>
                </div>
                <div class="box2">
                    <el-icon color="white">
                        <Edit />
                    </el-icon>
                </div>
                <div class="box3">
                    无障碍
                </div>
            </div>
        </div>
        <div class="body">
            <div class="left">
                <el-card class="box-card">
                    <div class="title">首页</div>
                    <div class="menu2">
                        <el-menu>
                            <div>
                                <div class="item">
                                    <el-icon>
                                        <Menu />
                                    </el-icon>
                                    <span>全部关注</span>
                                </div>
                            </div>
                            <div>
                                <div class="item">
                                    <el-icon>
                                        <Star />
                                    </el-icon>
                                    <span>最新微博</span>
                                </div>
                            </div>
                            <div>
                                <div class="item">
                                    <el-icon>
                                        <Menu />
                                    </el-icon>
                                    <span>特别关注</span>
                                </div>
                            </div>
                            <div>
                                <div class="item">
                                    <el-icon>
                                        <Menu />
                                    </el-icon>
                                    <span>好友圈</span>
                                </div>
                            </div>
                        </el-menu>
                    </div>
                    <div class="title2">
                        <div class="">自定义分组</div>
                        <div class="title2-right">管理</div>
                    </div>
                    <ul>
                        <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
                    </ul>
                </el-card>
            </div>
            <div class="middle">
                <el-card>
                    <div class="top">
                        <el-image style="width: 638px;height: 360px;" :src="avarar"></el-image>
                    </div>
                    <div class="bottom">
                        <div>
                            <el-image class="avatar2" :src="avatar2"></el-image>
                        </div>
                        <div class="desc">
                            <div class="name">明日方舟朝陇山</div>
                            <div class="fan">
                                <div>67.9万粉丝</div>
                                <div class="one">45关注</div>
                                <div class="one">863.3万转评赞</div>
                            </div>
                        </div>
                        <div class="buttonlist">
                            <div class="button">已关注</div>
                            <div class="button">
                                客服
                            </div>
                            <div class="button">···</div>
                        </div>
                    </div>
                    <div class="flex" style="margin-top: 10px;">
                        <div class="orange-box">热门游戏博主 数据飙升</div>
                        <div class="orange-box">昨日发博1，阅读数100万+，互动数3.1万</div>
                        <div class="box4">
                            <el-icon color="white" size="small">
                                <ArrowDownBold />
                            </el-icon>
                        </div>
                    </div>
                    <div class="box5">
                        《明日方舟》周边组朝陇山官方微博
                    </div>
                    <div class="box5">
                        IP属地：上海
                    </div>
                    <div class="weibo-box">
                        <div class="tab flex">
                            <div class="tablist" v-for="(item, index) in tabList" :key="index">
                                <div class="tab-item" :class="index === activeIndex ? 'active' : ''"
                                    @click="changeTab(index)">{{ item.name }}</div>
                            </div>
                        </div>
                    </div>
                </el-card>
                <el-card style="margin-top: 10px;">
                    <el-image style="width: 629px;height: 292px;" :src="cover"></el-image>
                </el-card>
                <div class="mt-10">
                    <el-card>
                        <div class="flex space-between">
                            <div class="">全部微博（2035）</div>
                            <div class="sousuo">
                                <el-input placeholder="搜索她的微博" :prefix-icon="Search" :suffix-icon="ArrowDownBold" />
                            </div>
                        </div>
                    </el-card>
                </div>
                <div class="weiboList">
                    <el-col :span="24" v-for="(item, index) in weiboList" :key="index">
                        <el-card class="mt-10">
                            <div class="bottom">
                                <div>
                                    <el-image class="avatar3" :src="avatar2"></el-image>
                                </div>
                                <div style="margin-left: 10px;">
                                    <div class="name">明日方舟朝陇山</div>
                                    <div class="time">
                                        <div>{{ item.time }}</div>
                                        <div class="one">来自</div>
                                        <div class="one">微博网页版</div>
                                    </div>
                                </div>
                                <div style="margin-left: auto;">
                                    <el-icon>
                                        <ArrowDownBold />
                                    </el-icon>
                                </div>
                            </div>
                            <div class="weibo-content">
                                <div class="orange">
                                    #明日方舟##朝陇山#
                                </div>
                                <div class="part">
                                    <div class="mt-10">{{ item.content }}</div>
                                    <div class="mt-10">{{ item.content2 }}</div>
                                    <div class="mt-10">{{ item.content3 }}</div>
                                </div>
                                <div style="margin-top: 10px;">
                                    <el-image style="width: 200px; height: 200px" :src="weibo1"></el-image>
                                </div>
                            </div>
                            <div class="weibo-footer flex space-between">
                                <div class="">
                                    <el-icon>
                                        <Position />
                                    </el-icon>
                                    {{ item.zhuanfa }}
                                </div>
                                <div class="">
                                    <el-icon>
                                        <ChatSquare />
                                    </el-icon>
                                    {{ item.pinglun }}
                                </div>
                                <div class="">
                                    <el-icon>
                                        <Pointer />
                                    </el-icon>
                                    {{ item.dianzan }}
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </div>
            </div>
            <div class="right">
                <el-card style="margin-left: 10px;">
                    <div class="flex space-between">
                        <div class="">关注推荐</div>
                        <div>
                            < 1/7>
                        </div>
                    </div>
                    <div class="starlist">
                        <div class="flex mt-10" v-for="(item, index) in starlist" :key="index">
                            <div class="flex space-between">
                                <div>
                                    <img :src="item.avatar" alt="" class="avatar4">
                                </div>
                                <div style="margin-left: 10px;">
                                    <div class="">{{ item.name }}</div>
                                    <div style="font-size: 14px;color: #aaa;">{{ item.desc }}</div>
                                </div>
                                <div class="box6">
                                    +关注
                                </div>
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { House, Search, Star, Monitor, Message, MostlyCloudy, Setting, Moon, Edit, Menu, ArrowDownBold, Position, ChatSquare, Pointer } from '@element-plus/icons-vue'
import { ref } from 'vue'
import avarar from '../static/images/avatar.jpg'
import avatar2 from '../static/images/avatar2.jpg'
import cover from '../static/images/cover.jpg'
import weibo1 from '../static/images/weibo1.jpg'
const list = ref([
    { name: '游戏' },
    { name: '明星' },
    { name: 'lo裙' },
    { name: '动漫' },
    { name: '名人明星' },
    { name: '同事' },
    { name: '同学' },
    { name: '悄悄关注' }
])
const tabList = ref([
    { name: '精选' },
    { name: '微博' },
    { name: '视频' },
    { name: '相册' },
])
const activeIndex = ref(0)
const changeTab = (index: number) => {
    activeIndex.value = index
}
const weiboList = ref([{
    time: '5小时前',
    content: '〓明日方舟 1/7手办 史尔特尔 自由//失效VER. 补款开启〓',
    content2: '补款日期：2024年9月25日-2024年11月30日',
    content3: '📅补款时间：9月25日-11月30日，共计60天',
    zhuanfa: 14,
    pinglun: 29,
    dianzan: 287
}, {
    time: '5小时前',
    content: '〓明日方舟 1/7手办 史尔特尔 自由//失效VER. 补款开启〓',
    content2: '补款日期：2024年9月25日-2024年11月30日',
    content3: '📅补款时间：9月25日-11月30日，共计60天',
    zhuanfa: 14,
    pinglun: 29,
    dianzan: 287
},
{
    time: '5小时前',
    content: '〓明日方舟 1/7手办 史尔特尔 自由//失效VER. 补款开启〓',
    content2: '补款日期：2024年9月25日-2024年11月30日',
    content3: '📅补款时间：9月25日-11月30日，共计60天',
    zhuanfa: 14,
    pinglun: 29,
    dianzan: 287
}
])
const starlist = ref([{
    name: '泰拉记事社',
    avatar: 'https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av1.jpg',
    desc: '泰拉记事社官方微博'
}, {
    name: '明日方舟终末地',
    avatar: 'https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av2.jpg',
    desc: '《明日方舟：终末地...'
},
{
    name: '海棠忘春集',
    avatar: 'https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av3.jpg',
    desc: '游戏博主'
}, {
    name: '龙崎一',
    avatar: 'https://minder-bucket.oss-cn-nanjing.aliyuncs.com/%E5%AE%9E%E8%AE%AD/av4.jpg',
    desc: '私信已关'
}
])
</script>

<style scoped>
.box6 {
    padding: 3px 10px;
    border: 1px solid #f56f36;
    border-radius: 50px;
    color: #f56f36;
    font-size: 14px;
    margin-left: 10px;
}

.weibo-footer {
    padding: 10px 20px 0 20px;
    color: #aaa;
}

.orange {
    color: #f56f36;
}

.name {
    font-weight: bold;
    font-size: 14px;
}

.time {
    font-size: 12px;
    color: #aaa;
    display: flex;
    margin-top: 10px;
}

.avatar4 {
    width: 50px;
    border-radius: 50%;
}

.avatar3 {
    width: 80px;
    border-radius: 50%;
}

.mt-10 {
    margin-top: 10px;
}

.space-between {
    justify-content: space-between;
}

.tab-item.active {
    color: #f56f36;
    border-bottom: 1px solid #f56f36;
}

.tab {
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px 0 10px;
    border-top: 1px solid #e5e6ef;
    padding: 10px 10px 0 10px;
}

.middle {
    margin-left: 20px;
}

.box5 {
    margin-left: 10px;
    font-size: 12px;
    margin-top: 10px;
    color: #aaa;
}

.box4 {
    border-radius: 50%;
    background-color: #e5e6ef;
    padding: 2px 6px;
    margin-left: 200px;
}

.orange-box {
    background-color: #fff3ed;
    color: #ff6200;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 50px;
    margin-left: 10px;
}

.flex {
    display: flex;
    align-items: center;
}

.avatar2 {
    width: 100px;
    border-radius: 50%;
}

.whole {
    background-color: #f2f3f5;
    margin: 0;
    padding: 0;

}

.banner {
    display: flex;
    align-items: center;
    padding: 0 200px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.banner-foot {
    display: flex;
    margin-left: 100px;
}

.m-item {
    width: 150px;
}

.item {
    padding: 10px 0;
    margin-top: 10px;
}

.box {
    margin-left: 50px;
    background-color: #e5e6ef;
    padding: 5px 8px;
    border-radius: 100px;
}

.box2 {
    margin-left: 50px;
    padding: 5px 8px;
    border-radius: 100px;
    background-color: #f56f36;
}

.box3 {
    margin-left: 50px;
    background-color: #e5e6ef;
    padding: 5px 12px;
    border-radius: 100px;
}

.body {
    display: flex;
    justify-content: center;
    padding-top: 20px;

    .left {
        width: 200px;
    }
}

.title2 {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;

    .title2-right {
        border: #f56f36 solid 1px;
        color: #f56f36;
        border-radius: 50px;
        padding: 2px 5px;
        font-size: 12px;
    }
}

li {
    padding: 10px 0;
}

.box-card {
    height: 90vh;
}

.bottom {
    display: flex;
    align-items: center;
    justify-content: start;
}

.desc {
    margin-left: 10px;
    font-weight: bold;
}

.fan {
    display: flex;
    font-size: 14px;
    margin-top: 10px;
}

.one {
    margin-left: 10px;
}

.buttonlist {
    display: flex;
    margin-left: 100px;
}

.button {
    border: #e5e6ef solid 1px;
    border-radius: 50px;
    padding: 5px 10px;
    color: #808080;
    margin-left: 10px;
}
</style>