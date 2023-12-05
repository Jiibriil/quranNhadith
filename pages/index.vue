<!-- Login.vue -->
<template>
  <NuxtLink to="/api/login" external> Sign in </NuxtLink>

  <NuxtLink to="/api/register" external> Sign up </NuxtLink>
  {{ data }}
</template>

<script setup>
// get quran from api using api-party

const { data, pending, refresh, error } = await useFetch(
  "http://api.alquran.cloud/v1/edition"
);
</script>
