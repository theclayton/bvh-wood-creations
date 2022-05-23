<template>
  <v-container class="pt-16">
    <h1 class="pt-16 text-h2 font-weight-black">{{ heading }}</h1>

    <v-divider class="mt-4"></v-divider>

    <v-row wrap justify="center" class="mt-5 mb-16">
      <v-card rounded="6" v-for="(pen, i) in pens" :key="i" class="ma-5">
        <NuxtLink :to="pen.path" class="text-decoration-none">
          <v-card-title>{{ pen.title }}</v-card-title>
          <v-card-subtitle>{{ pen.subtitle }}</v-card-subtitle>
          <v-img max-height="300" max-width="350" :src="pen.thumbnail"></v-img>
        </NuxtLink>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import content from "../content/pages/shop.json";

export default {
  head() {
    return {
      title: content.metaTitle,
      meta: [
        {
          hid: "shop",
          name: "shop",
          content: content.metaContent,
        },
      ],
    };
  },
  async asyncData({ $content, params, error, store }) {
    const pens = await $content("pens")
      .sortBy("createdAt", "desc")
      .only(["title", "subtitle", "thumbnail", "path"])
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      pens,
    };
  },
  data() {
    return content;
  },
};
</script>
