<template>
  <v-container class="pt-16">
    <h1 class="text-h2 pt-16">{{ heading }}</h1>
    <v-divider></v-divider>
    <!-- TODO grid of products
          Dynamically generated with CMS
          Pulls title, subtitle and thumbnail from product content
       -->
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
  data() {
    return content;
  },
};
</script>
