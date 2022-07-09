<template>
  <v-container class="mt-16">
    <div class="mt-10 mb-2">
      <NuxtLink to="/shop">Shop</NuxtLink>
      / {{ pen.slug }}
    </div>

    <v-row wrap no-gutters class="mb-5">
      <v-col cols="12" md="4" lg="3" class="pb-5">
        <client-only>
          <image-magnifier
            :src="image"
            :zoom-src="image"
            width="300"
            zoom-width="300"
            zoom-height="300"
          ></image-magnifier>
        </client-only>

        <v-row wrap no-gutters>
          <v-col v-for="(img, i) in pen.images" :key="i">
            <v-btn plain class="ma-0 pa-0" @click="image = img.image">
              <v-img :src="img.image" height="25" width="25"></v-img>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="8" md="8" lg="9" class="pl-5">
        <h1 class="text-h3 font-weight-bold">{{ pen.title }}</h1>
        <h2 class="pb-6 text-h5 font-weight-light">{{ pen.subtitle }}</h2>

        <v-divider class="pb-3"></v-divider>

        <nuxt-content :document="pen" />

        <a class="text-decoration-none" :href="pen.etsyLink" target="_blank">
          <v-btn class="my-5">View on Etsy </v-btn>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ImageMagnifier } from "vue-image-magnifier";

export default {
  head() {
    return {
      title: this.pen.title,
      meta: [
        {
          name: this.pen.title,
          content: this.pen.subtitle,
        },
      ],
    };
  },
  components: {
    ImageMagnifier,
  },
  async asyncData({ $content, params, error }) {
    let pen;

    try {
      pen = await $content(`pens/${params.slug}`).fetch();
    } catch (e) {
      error({ statusCode: 404, message: "Pen not found" });
    }

    const image = pen.images[0].image;

    return {
      pen,
      image,
    };
  },
};
</script>
