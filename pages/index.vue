<template>
  <div class="text-center">
    <!-- MAIN SECTION -->
    <div class="pt-16">
      <v-parallax
        max-height="500"
        :src="mainBackgroundImage"
        :alt="mainBackgroundImageAlt"
      >
        <v-container class="mt-16">
          <h1 class="mt-16 text-h1 font-weight-thin white--text">
            {{ mainHeading }}
          </h1>
          <h2 class="mt-4 mb-15 text-h4 font-weight-light white--text">
            {{ mainSubheading }}
          </h2>

          <v-divider class="pt-16"></v-divider> </v-container
      ></v-parallax>
    </div>

    <!-- SHOP SECTION -->
    <v-container>
      <h2 class="pt-14 text-h2 font-weight-black">{{ shopHeading }}</h2>
      <h3 class="pt-3 text-h4 font-weight-light">{{ shopSubheading }}</h3>

      <v-row wrap justify="center" class="mt-13 pb-8 text-left">
        <v-card class="rounded-card ma-3">
          <NuxtLink :to="`/pens/${shopFeatured1}`" class="text-decoration-none">
            <v-card-title class="mainBlue--text text--darken-3">
              {{ featured1.title }}
            </v-card-title>
            <v-card-subtitle class="mainBlue--text text--darken-3">
              {{ featured1.subtitle }}
            </v-card-subtitle>
            <v-img
              max-height="415"
              max-width="315"
              :src="featured1.thumbnail"
            ></v-img>
          </NuxtLink>
        </v-card>

        <v-card class="rounded-card ma-3">
          <NuxtLink :to="`/pens/${shopFeatured2}`" class="text-decoration-none">
            <v-card-title class="mainBlue--text text--darken-3">
              {{ featured2.title }}
            </v-card-title>
            <v-card-subtitle class="mainBlue--text text--darken-3">
              {{ featured2.subtitle }}
            </v-card-subtitle>
            <v-img
              max-height="415"
              max-width="315"
              :src="featured2.thumbnail"
            ></v-img>
          </NuxtLink>
        </v-card>

        <v-card class="rounded-card ma-3">
          <NuxtLink :to="`/pens/${shopFeatured3}`" class="text-decoration-none">
            <v-card-title class="mainBlue--text text--darken-3">
              {{ featured3.title }}
            </v-card-title>
            <v-card-subtitle class="mainBlue--text text--darken-3">
              {{ featured3.subtitle }}
            </v-card-subtitle>
            <v-img
              max-height="415"
              max-width="315"
              :src="featured3.thumbnail"
            ></v-img>
          </NuxtLink>
        </v-card>
      </v-row>

      <NuxtLink to="/shop" class="text-decoration-none">
        <v-btn x-large rounded color="grey darken-3" class="my-5 white--text"
          >{{ shopButton }}
        </v-btn>
      </NuxtLink>

      <v-divider class="my-16"></v-divider>

      <!-- ABOUT SECTION -->
      <!-- <div class="d-flex pt-3 pb-5"> -->

      <v-row wrap justify="center" class="mt-13 pb-8 text-left">
        <div class="text-left ma-3">
          <h2 class="pb-10 text-h3 font-weight-bold">{{ aboutHeading }}</h2>
          <p>
            {{ aboutText }}
            <NuxtLink to="/about">Go to about page></NuxtLink>
          </p>
        </div>

        <v-img
          max-width="200"
          class="ma-3"
          :src="aboutImage"
          :alt="aboutImageAlt"
        ></v-img>
        <!-- </div> -->
      </v-row>

      <v-divider class="my-10"></v-divider>

      <!-- CONTACT SECTION -->
      <h2>{{ contactHeading }}</h2>
      <h4 class="pb-10">{{ contactPhone }}</h4>

      <client-only>
        <contact-form></contact-form>
      </client-only>
    </v-container>
  </div>
</template>

<script>
import content from "../content/pages/index.json";

export default {
  head() {
    return {
      title: content.metaTitle,
      meta: [
        {
          hid: "index",
          name: "index",
          content: content.metaContent,
        },
      ],
    };
  },
  data() {
    return content;
  },
  async asyncData({ $content, params, error }) {
    let featured1;
    let featured2;
    let featured3;

    featured1 = await $content(`pens/${content.shopFeatured1}`).fetch();
    featured2 = await $content(`pens/${content.shopFeatured2}`).fetch();
    featured3 = await $content(`pens/${content.shopFeatured3}`).fetch();

    return {
      featured1,
      featured2,
      featured3,
    };
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 17px;
  overflow: hidden;
}
</style>