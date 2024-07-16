<script setup>
import { ref, computed, defineProps } from "vue";
//state

//methods
defineProps({ PostTitle: String, PostBody: String });

//lifecycle hooks
</script>

<template>
  <div class="box">
    <h1 class="title">{{ PostTitle }}</h1>
    <p>{{ PostBody }}</p>
  </div>
</template>

<style scoped></style>
