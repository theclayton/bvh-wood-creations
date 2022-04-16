<template>
  <v-app>
    <Header />
    <Nuxt />
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>
