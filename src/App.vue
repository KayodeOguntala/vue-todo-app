<template>
  <div class="app-container">
    <NavBar />
    <ErrorBoundary>
      <router-view />
    </ErrorBoundary>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
//import NavBar from './components/NavBar.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    NavBar,
    ErrorBoundary
  },
  setup() {
    const router = useRouter()
    
    // Handle 404 redirects
    router.beforeEach((to, from, next) => {
      if (!to.matched.length) {
        next('/404')
      } else {
        next()
      }
    })
  }
}
</script>

<style>
@import '/index.css';

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>