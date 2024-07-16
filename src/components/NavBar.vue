<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand title">SAV blog</div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <RouterLink to="/" class="button navbar-item">Home</RouterLink>

        <RouterLink to="/posts" class="button navbar-item">Posts</RouterLink>
      </div>
      <div class="navbar-end">
        <RouterLink to="/about" class="button navbar-item">About</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-start {
}

.navbar-item {
}

.navbar-end {
}
</style>
