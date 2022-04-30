<template>
  <v-container class="mt-16">
    <div class="mt-10">
      <NuxtLink to="/shop">Shop</NuxtLink>
      / {{ pen.slug }}
    </div>

    <h1 class="mt-7">{{ pen.title }}</h1>
    <h2 class="mt-2">{{ pen.subtitle }}</h2>

    <a class="text-decoration-none" :href="pen.etsyLink" target="_blank">
      <v-btn class="my-5">View on Etsy </v-btn>
    </a>

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