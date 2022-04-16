<template>
  <v-container>
    <v-card>
      <v-card-title class="headline"> {{ heading }} </v-card-title>
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
  data() {
    return content;
  },
};
</script>
