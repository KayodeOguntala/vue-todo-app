<template>
  <nav class="navbar" role="navigation">
    <ul>
      <li>
        <router-link
          to="/"
          :class="{ active: $route.path === '/' }"
          :aria-current="$route.path === '/' ? 'page' : null"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          to="/error"
          :class="{ active: $route.path === '/error' }"
          :aria-current="$route.path === '/error' ? 'page' : null"
        >
          Error Test
        </router-link>
      </li>
      <li>
        <router-link
          to="/404"
          :class="{ active: $route.path === '/404' }"
          :aria-current="$route.path === '/404' ? 'page' : null"
        >
          Not Found
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<style src="./NavBar.css" scoped></style>