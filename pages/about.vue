<template>
  <v-container class="pt-16">
    <h1 class="headline pt-16">{{ heading }}</h1>
    <h2 class="text-h2">{{ subheading }}</h2>
    <p class="pt-2">{{ aboutText }}</p>
    <v-img
      max-height="250"
      max-width="250"
      class="ml-2 mt-3"
      :src="aboutImage"
      :alt="aboutImageAlt"
    ></v-img>
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
