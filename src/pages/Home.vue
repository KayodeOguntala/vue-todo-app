<template>
  <div class="home">
    <h1>Todo List</h1>
    <TodoList :todos="todos" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TodoList from '@/components/TodoList.vue'

const todos = ref([])

onMounted(async () => {
  try {
    todos.value = await fetchTodos() 
  } catch (error) {
    console.error('Error fetching todos:', error)
  }
})
</script>
<style src="./Home.css" scoped></style>
