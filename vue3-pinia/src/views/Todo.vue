<template>
    <div class="box">
        <h2>待办清单</h2>
        <input type="text" v-model="newTodoText" placeholder="请输入新的待办事项" />
        <button @click="myAddTodo">添加</button>
        <ul>
            <li v-for="(todo, index) in myTodos" :key="todo.id" :class="{ completed: todo.completed }"
                @click="myToggleTodo(index)">
                {{ todo.title }}
                <button @click="myRemoveTodo(index)">删除</button>
                <button @click="myToggleTodo(index)">{{ todo.completed ? '已完成' : '未完成' }}</button>
            </li>
        </ul>


    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '../store/useTodo';
import { ref } from 'vue'

const todoStore = useTodoStore()

const newTodoText = ref("");

const myAddTodo = () => {
    if (newTodoText.value.trim()) {
        todoStore.addTodo(newTodoText.value)
        newTodoText.value = ''
    }
}


const myRemoveTodo = (index: number) => {
    todoStore.removeTodo(index)
}

const myToggleTodo = (index: number) => {
    todoStore.toggleTodo(index)
}

const myTodos = todoStore.todos;

</script>
<style>
.completed {
    text-decoration: line-through;
    color: grey;
}

.box {
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

button {
    padding: 5px;
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
    margin-left: 10px;
}

li {
    margin-top: 10px;
}
</style>