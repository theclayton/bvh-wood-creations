<template>
  <div>
    <v-app-bar flat prominent dense elevation="1" color="primaryBlue">
      <NuxtLink to="/" class="text-decoration-none">
        <v-img
          max-height="75"
          max-width="108"
          class="ml-2 mt-3"
          :src="logo"
          :alt="logoAlt"
        ></v-img>
      </NuxtLink>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon large v-bind="attrs" v-on="on" class="mr-0 mt-2">
            <v-icon large color="white"> mdi-menu </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title
              ><NuxtLink
                to="/"
                class="text-subtitle-1 grey--text text-decoration-none"
              >
                <v-icon> mdi-home </v-icon>
                Home
              </NuxtLink>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <NuxtLink
                to="/shop"
                class="text-subtitle-1 grey--text text-decoration-none"
              >
                <v-icon> mdi-store </v-icon>
                Shop
              </NuxtLink>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <NuxtLink
                to="/about"
                class="text-subtitle-1 grey--text text-decoration-none"
              >
                <v-icon> mdi-information-outline </v-icon>
                About
              </NuxtLink>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import content from "../content/components/header.json";

export default {
  data() {
    return content;
  },
};
</script>