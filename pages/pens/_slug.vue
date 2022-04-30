<template>
  <v-container class="mt-16">
    <h1 class="mt-16">{{ pen.title }}</h1>
    <h2 class="mt-2">{{ pen.subtitle }}</h2>

    <p v-for="(img, i) in pen.images" :key="i">{{ img }}</p>

    <nuxt-content :document="pen" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let pen;

    try {
      pen = await $content(`pens/${params.slug}`).fetch();
    } catch (e) {
      error({ statusCode: 404, message: "Pen not found" });
    }

    return {
      pen,
    };
  },
};
</script>