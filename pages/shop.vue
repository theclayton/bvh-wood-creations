<template>
  <v-container class="pt-16">
    <h1 class="text-h2 pt-16">{{ heading }}</h1>
    <v-divider></v-divider>

    <v-card v-for="(pen, i) in pens" :key="i">
      <NuxtLink :to="pen.path">
        <v-card-title>{{ pen.title }}</v-card-title>
        <v-card-subtitle>{{ pen.subtitle }}</v-card-subtitle>
      </NuxtLink>
    </v-card>
  </v-container>
</template>

<script>
import content from "../content/pages/shop.json";

export default {
  head() {
    return {
      title: content.meta.title,
      meta: [
        {
          hid: "shop",
          name: "shop",
          content: content.meta.content,
        },
      ],
    };
  },
  async asyncData({ $content, params, error, store }) {
    const pens = await $content("pens")
      .sortBy("createdAt", "desc")
      .only(["title", "subtitle", "path"])
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
