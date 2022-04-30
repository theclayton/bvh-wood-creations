<template>
  <v-container class="mt-16">
    <h1 v-if="error.statusCode === 404" class="mt-16">Page not found</h1>
    <h1 v-else>Error: {{ error.message }}</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </v-container>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>