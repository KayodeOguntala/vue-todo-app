<template>
  <div>
    <router-link to="/">Go Home</router-link>
        <p>Simulating a runtime error (check console)</p>
  </div>
</template>

<script>
export default {
  name: "ErrorTest",
  mounted() {
  
    setTimeout(() => {
      throw new Error("Test Error from Vue component");
    }, 0); 
  }
};
</script>
