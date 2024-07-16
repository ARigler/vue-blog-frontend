<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar></NavBar>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      backend_address:
        import.meta.env.VITE_API_BACKEND_HOST +
        ":" +
        import.meta.env.VITE_API_BACKEND_PORT,
    };
  },
};
</script>

<style scoped></style>
