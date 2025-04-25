<template>
  <div v-if="error" class="error-boundary">
    <div class="error-content" role="alert">
      <h1>⚠️ Something went wrong</h1>
      <p class="error-message">{{ error.message }}</p>
      <p>Please try:</p>
      <ul class="suggestions">
        <li>Refreshing the page</li>
        <li>Returning to the <router-link to="/">home page</router-link></li>
        <li>Contacting support if the problem persists</li>
      </ul>
      <button @click="resetError" class="retry-button">Try Again</button>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  data() {
    return {
      error: null,
      errorInfo: null
    }
  },
  methods: {
    resetError() {
      this.error = null
      this.errorInfo = null
    }
  },
  errorCaptured(err, vm, info) {
    this.error = err
    this.errorInfo = info
    
  
    console.error('ErrorBoundary caught:', err, info)
    
    
    return false
  }
}
</script>
<style src="./ErrorBoundary.css" scoped></style>