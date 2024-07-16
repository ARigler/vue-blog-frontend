<script setup>
import Post from "./Post.vue";
import { ref, computed, onMounted } from "vue";
import { postStore } from "@/stores/posts";

const storePosts = postStore();
storePosts.fetch_posts();
//lifecycle hooks
</script>

<template>
  <div>
    <post
      v-for="item in storePosts.post_list.posts"
      :PostTitle="item.post_title"
      :PostBody="item.post_body"
    ></post>
  </div>
</template>

<style scoped></style>
