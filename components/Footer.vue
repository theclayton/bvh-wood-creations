<template>
  <div>
    <v-footer dense bottom padless elevation="1" color="darkGrey">
      <v-spacer></v-spacer>

      <p class="pt-5 white--text">{{ copyright }}</p>

      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>

<script>
import content from "../content/components/footer.json";

export default {
  data() {
    return content;
  },
};
</script>