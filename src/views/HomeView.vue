<script setup>
import Post from "../components/Post.vue";
import { postStore } from "@/stores/posts";
const storePosts = postStore();
storePosts.fetch_posts();
</script>

<template>
  <main>
    <post
      :PostTitle="storePosts.post_list.posts[0].post_title"
      :PostBody="storePosts.post_list.posts[0].post_body"
    ></post>
  </main>
</template>
