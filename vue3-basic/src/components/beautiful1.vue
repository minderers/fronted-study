<template>
    <el-container class="container">
        <el-menu mode="horizontal" class="menu" :default-active="1">
            <el-menu-item v-for="item in tabList " :key="item.id" :index="item.id.toString()">
                {{ item.name }}
            </el-menu-item>
        </el-menu>
        <el-input placeholder="搜索" class="search" :suffix-icon="Search" />
        <el-dropdown split-button type="primary" style="margin: 0 20px;">
            创作者中心
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>写文章</el-dropdown-item>
                    <el-dropdown-item>发沸点</el-dropdown-item>
                    <el-dropdown-item>写笔记</el-dropdown-item>
                    <el-dropdown-item>写代码</el-dropdown-item>
                    <el-dropdown-item>草稿箱</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <el-button>登录 | 注册</el-button>
    </el-container>
    <main class="main">
        <el-menu class="left-tab">
            <el-menu-item v-for="item in tabList2 " :key="item.id" :index="item.id.toString()">
                {{ item.name }}
            </el-menu-item>
        </el-menu>
        <el-card class="list">
            <el-menu mode="horizontal" default-active="1" class="right-tab" :router="true">
                <el-menu-item>
                    推荐
                </el-menu-item>
                <el-menu-item>
                    最新
                </el-menu-item>
                <el-menu-item>
                    热门
                </el-menu-item>
            </el-menu>
            <ul class="message-list">
                <li v-for="(item, index) in MessageList" :key="index" class="item">
                    <div class="title">{{ item.title }}</div>
                    <div class="content">{{ item.content }}</div>
                    <div class="bottom">
                        <div class="writer">{{ item.writer }}</div>
                        <div class="time">
                            <el-icon>
                                <View />
                            </el-icon>
                            <div class="number">{{ item.div }}</div>
                        </div>
                        <div class="zan">
                            <el-icon>
                                <Star />
                            </el-icon>
                            <div class="number" style="display: flex;">{{ item.zan }}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </el-card>
        <div style="margin-left: 20px; ">
            <el-card style=" height: 80px;">
                <div class="right">
                    <div class="">
                        <div style="font-weight: bold;">中午好</div>
                        <div style="color: #ccc;font-size: 12px;">点亮在社区的每一天</div>
                    </div>
                    <div style="margin-left: 10px;">
                        <el-button type="primary">去签到</el-button>
                    </div>
                </div>
            </el-card>
            <el-card style="margin-top: 10px;">
                <template #header>
                    <div class="flex">
                        <div class="zuo">
                            <el-icon>
                                <Tickets />
                            </el-icon>
                            文章榜
                        </div>
                        <div style="color: #ccc;font-size: 14px;">
                            <el-icon color="#ccc">
                                <RefreshLeft />
                            </el-icon>
                            换一换
                        </div>
                    </div>
                </template>
                <el-table :data="tableData" show-header="false" table-layout="auto">
                    <el-table-column prop="id" />
                    <el-table-column prop="title" />
                </el-table>
                <div class="footer">
                    查看更多
                    <el-icon>
                        <ArrowRight />
                    </el-icon>
                </div>
            </el-card>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, View, Star, Tickets, RefreshLeft, ArrowRight } from '@element-plus/icons-vue'

const tabList = ref([
    { id: 1, name: '首页' },
    { id: 2, name: 'BOT' },
    { id: 3, name: '沸点' },
    { id: 4, name: '课程' },
    { id: 5, name: '直播' },
    { id: 6, name: '活动' },
    { id: 7, name: '竞赛' },
    { id: 8, name: '商城' },
    { id: 9, name: 'APP' },
    { id: 10, name: '插件' }
])
const tabList2 = ref([
    { id: 1, name: '大模型子站' },
    { id: 2, name: '关注' },
    { id: 3, name: '综合' },
    { id: 4, name: '后端' },
    { id: 5, name: '前端' },
    { id: 6, name: 'Android' },
    { id: 7, name: 'iOS' },
    { id: 8, name: '人工智能' },
    { id: 9, name: '开发工具' },
    { id: 10, name: '代码人生' },
    { id: 11, name: '阅读' },
    { id: 12, name: '排行榜' }
])
const MessageList = ref([
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
    { title: '关于【AI加码,青训营X MarsCode 技术训练营】你想了解的在这里', content: '青训营的课程有哪些？', writer: '字节跳动青训营', div: 728, zan: 34 },
])
const tableData = ref([
    { id: 1, title: '前端' },
    { id: 2, title: '后端' },
    { id: 3, title: '全栈' },
    { id: 4, title: '算法' },
    { id: 5, title: '大数据' },
    { id: 6, title: '人工智能' },
    { id: 7, title: '云计算' },
    { id: 8, title: '物联网' },
    { id: 9, title: '区块链' },
    { id: 10, title: '移动开发' }
])
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
}

.container {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.search {
    width: 400px;
}

.avatar {
    margin-left: 150px;
    margin-right: 20px;
}

.main {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    background-color: #f2f3f5;
}

.list {
    margin-left: 20px;
    width: 800px;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li:hover {
    background-color: #f7f8fa;
}

.message {
    margin-left: 20px;
    font-size: 14px;
}

.bottom {
    display: flex;

    margin-top: 10px;
    color: #ccc;
    font-size: 14px;
}

.content {
    color: #ccc;
    font-size: 14px;
}

.time {
    display: flex;
    margin-left: 20px;
    font-size: 14px;
}

.zan {
    display: flex;
    margin-left: 20px;
}

.title {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
}

.right {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>