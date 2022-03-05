<template>
  <header class="flex items-center py-4 md:py-8">
    <div class="header__logo">
      <nuxt-link to="/">
        <!-- <img :src="logo" alt="Logo" /> -->
        <h3>BVH Wood Creations</h3>
      </nuxt-link>
    </div>

    <nav class="nav ml-auto">
      <ul class="flex flex-row items-center sm:mt-4 sm:pt-4 md:mt-0 md:pt-0 md:mr-4 lg:mr-8">
        <li class="block font-medium px-4 py-1 md:p-2 lg:px-4">
          <nuxt-link to="/"> home </nuxt-link>
        </li>

        <li class="block font-medium px-4 py-1 md:p-2 lg:px-4">
          <nuxt-link to="/shop"> shop </nuxt-link>
        </li>

        <li class="block font-medium px-4 py-1 md:p-2 lg:px-4">
          <nuxt-link to="/about"> about us </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component
export default class Header extends Vue {
  logo = settings.logo;
}
</script>

<style lang="scss">
.nav {
  ul li > a {
    &.nuxt-link-active {
      color: $bluise;
      @apply font-bold;
    }
  }
}
</style>
