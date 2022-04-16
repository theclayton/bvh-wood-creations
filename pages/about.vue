<template>
  <v-container>
    <v-card>
      <v-card-title class="headline"> {{ heading }} </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import content from "../content/pages/about.json";

export default {
  head() {
    return {
      title: content.meta.title,
      meta: [
        {
          hid: "about",
          name: "about",
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
