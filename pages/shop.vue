<template>
  <v-container>
    <v-card-title class="headline"> {{ heading }} </v-card-title>
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
