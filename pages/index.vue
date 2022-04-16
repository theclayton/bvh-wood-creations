<template>
  <v-container>
    <v-card-title class="text-h2 mt-2">{{ heading }}</v-card-title>
    <v-card-text class="text-subtitle-1">{{ subheading }}</v-card-text>
  </v-container>
</template>

<script>
import content from "../content/pages/index.json";

export default {
  head() {
    return {
      title: content.meta.title,
      meta: [
        {
          hid: "index",
          name: "index",
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
