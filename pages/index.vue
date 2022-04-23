<template>
  <div class="text-center">
    <!-- MAIN SECTION -->
    <!-- <v-img
      max-height="500"
      class="ml-2 mt-3"
      :src="mainBackgroundImage"
      :alt="mainBackgroundImageAlt"
    ></v-img> -->

    <v-container>
      <h1 class="text-h2 mt-15">{{ mainHeading }}</h1>
      <h2 class="text-subtitle-1 pb-15">{{ mainSubheading }}</h2>

      <v-divider class="my-10"></v-divider>

      <!-- SHOP SECTION -->

      <h2>{{ shopHeading }}</h2>
      <h3>{{ shopSubheading }}</h3>

      <div class="mt-10 d-flex flex-row justify-space-between">
        <v-card rounded="6">
          <v-card-title>{{ shopFeatured1Title }}</v-card-title>
          <v-card-subtitle>{{ shopFeatured1Description }}</v-card-subtitle>
          <v-img
            max-height="350"
            max-width="350"
            class="ml-2 mt-3"
            :src="shopFeatured1Image"
            :alt="shopFeatured1ImageAlt"
          ></v-img>
        </v-card>

        <v-card>
          <v-card-title>{{ shopFeatured2Title }}</v-card-title>
          <v-card-subtitle>{{ shopFeatured2Description }}</v-card-subtitle>
          <v-img
            max-height="350"
            max-width="350"
            class="ml-2 mt-3"
            :src="shopFeatured2Image"
            :alt="shopFeatured2ImageAlt"
          ></v-img>
        </v-card>

        <v-card>
          <v-card-title>{{ shopFeatured3Title }}</v-card-title>
          <v-card-subtitle>{{ shopFeatured3Description }}</v-card-subtitle>
          <v-img
            max-height="350"
            max-width="350"
            class="ml-2 mt-3"
            :src="shopFeatured3Image"
            :alt="shopFeatured3ImageAlt"
          ></v-img>
        </v-card>
      </div>

      <v-divider class="my-10"></v-divider>

      <!-- ABOUT SECTION -->
      <h2>{{ aboutHeading }}</h2>
      <p>{{ aboutText }}</p>
      <v-img
        max-height="75"
        max-width="108"
        class="ml-2 mt-3"
        :src="aboutImage"
        :alt="aboutImageAlt"
      ></v-img>

      <v-divider class="my-10"></v-divider>

      <!-- CONTACT SECTION -->
      <h2>{{ contactHeading }}</h2>
      <h4>{{ contactPhone }}</h4>

      <contact-form></contact-form>
    </v-container>
  </div>
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
