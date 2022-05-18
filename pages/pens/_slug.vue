<template>
  <v-container class="mt-16">
    <div class="mt-10 mb-2">
      <NuxtLink to="/shop">Shop</NuxtLink>
      / {{ pen.slug }}
    </div>

    <v-row no-gutters class="mb-5">
      <v-col cols="12" sm="6" md="8">
        <v-carousel>
          <v-carousel-item
            v-for="(img, i) in pen.images"
            :key="i"
            :src="img"
          ></v-carousel-item>
        </v-carousel>
      </v-col>

      <v-col cols="6" md="4" class="pl-3">
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
export default {
  async asyncData({ $content, params, error }) {
    let pen;

    try {
      pen = await $content(`pens/${params.slug}`).fetch();
    } catch (e) {
      error({ statusCode: 404, message: "Pen not found" });
    }

    return {
      pen,
    };
  },
};
</script>