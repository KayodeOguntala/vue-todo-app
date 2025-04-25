<template>
  <div class="not-found" role="alert">
    <h1>404 - Not Found</h1>
    <p>The page you requested could not be found.</p>
    <router-link to="/" class="back-to-home">Go back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage' 
}
</script>
<style src="./NotFound.css" scoped></style>
