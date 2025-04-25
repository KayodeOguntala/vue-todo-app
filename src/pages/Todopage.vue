<template>
  <div class="todo-page">
    <h1>Todo Details</h1>
    <ErrorBoundary>
      <TodoDetails />
    </ErrorBoundary>
  </div>
</template>

<script>
import TodoDetails from '@/components/TodoDetails.vue'
import ErrorBoundary from '@/components/ErrorBoundary.vue'

export default {
  name: 'TodoPage',
  components: {
    TodoDetails,
    ErrorBoundary
  }
}
</script>
