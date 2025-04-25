<template>
  <div class="todo-details">
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="error">Error: {{ error }}</p>
    <div v-else>
      <p id="details">ToDo Details</p>
      <h1>{{ todo.title }}</h1>
      <p>{{ todo.description }}</p>
      <p :class="todo.completed ? 'completed' : 'pending'">
        Status: {{ todo.completed ? 'Completed' : 'Pending' }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchTodoById } from '../utils/Api';

export default {
  name: 'TodoDetails',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      todo: null,
      isLoading: true,
      error: null
    };
  },
  methods: {
    async loadTodo() {
      try {
        this.isLoading = true;
        const data = await fetchTodoById(this.id);
        this.todo = data;
      } catch (error) {
        console.error('Error fetching todo details:', error.message);
        this.error = 'An error occurred while fetching todo details. Please try again later.';
      } finally {
        this.isLoading = false;
      }
    }
  },
  created() {
    this.loadTodo();
  },
  watch: {
    id() {
      this.loadTodo();
    }
  }
};
</script>
<style src="./TodoDetails.css" scoped></style>