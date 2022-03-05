<template>
  <section class="about">
    <div class="py-24 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row">
      <div class="flex flex-col w-full xl:w-3/5 overflow-y-hidden">
        <div v-html="$md.render(title)" class="markdown" />

        <div v-html="$md.render(content)" class="markdown" />
      </div>
      <div class="flex flex-col w-full xl:w-2/5">
        <img alt="About us image" class="rounded shadow-xl" :src="featuredImage" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import about from '@/content/about.json';

@Component({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
})
export default class About extends Vue {
  title = about.title;

  content = about.content;

  featuredImage = about.featuredImage;
}
</script>
