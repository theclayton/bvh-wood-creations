<template>
  <v-container class="pt-16">
    <h1 class="headline pt-16 pb-3">{{ heading }}</h1>

    <div class="pb-16">
      <div>
        <h2 class="pt-2 text-h2 font-weight-black">{{ subheading }}</h2>

        <v-img
          max-height="250"
          max-width="250"
          class="ml-2 mt-6"
          :src="aboutImage"
          :alt="aboutImageAlt"
        ></v-img>
      </div>
      <p class="pt-5 pl-6 pr-6">{{ aboutText }}</p>
    </div>

    <v-divider class="my-10"></v-divider>

    <!-- CONTACT SECTION -->
    <div class="text-center">
      <h2>{{ contactHeading }}</h2>
      <h4 class="pb-10">{{ contactPhone }}</h4>
    </div>

    <client-only>
      <contact-form></contact-form>
    </client-only>
  </v-container>
</template>

<script>
import content from "../content/pages/about.json";

export default {
  head() {
    return {
      title: content.metaTitle,
      meta: [
        {
          hid: "about",
          name: "about",
          content: content.metaContent,
        },
      ],
    };
  },
  data() {
    return content;
  },
};
</script>
