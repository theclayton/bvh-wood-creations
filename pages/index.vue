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
              max-height="300"
              max-width="350"
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
              max-height="300"
              max-width="350"
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
              max-height="300"
              max-width="350"
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
      <div class="d-flex pt-3 pb-5">
        <div class="text-left">
          <h2 class="pb-10 text-h3 font-weight-bold">{{ aboutHeading }}</h2>
          <p>
            {{ aboutText }}
            <NuxtLink to="/about">Go to about page></NuxtLink>
          </p>
        </div>
        <div>
          <v-img
            max-width="200"
            class="mr-4 ml-6"
            :src="aboutImage"
            :alt="aboutImageAlt"
          ></v-img>
        </div>
      </div>

      <v-divider class="my-10"></v-divider>

      <!-- CONTACT SECTION -->
      <h2>{{ contactHeading }}</h2>
      <h4 class="pb-10">{{ contactPhone }}</h4>

      <!-- CONTACT FORM -->
      <div>
        <v-row justify="center">
          <v-col md="5">
            <p class="text-subtitle-1">Contact us with the form below:</p>

            <v-form
              name="bvh-contact-form"
              method="POST"
              ref="form"
              lazy-validation
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              v-on:submit.prevent="onSubmit"
            >
              <input type="hidden" name="bvh-form" value="bvh-contact-form" />

              <v-text-field
                placeholder="First Name"
                solo
                clearable
                v-model="form.firstName"
                :rules="nameRules"
              ></v-text-field>

              <v-text-field
                placeholder="Last Name"
                solo
                clearable
                v-model="form.lastName"
                :rules="nameRules"
              ></v-text-field>

              <v-text-field
                placeholder="Email Address"
                solo
                clearable
                v-model="form.email"
                :rules="emailRules"
              ></v-text-field>

              <v-textarea
                placeholder="Message..."
                solo
                clearable
                v-model="form.message"
              ></v-textarea>

              <p :v-show="error" class="red--text">{{ error }}</p>
              <v-btn
                :disabled="isLoading"
                type="submit"
                large
                rounded
                color="primaryBlue"
                class="text-decoration-none mt-1 mb-16 white--text"
                on
              >
                {{ submitButtonText }}
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
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
    return {
      ...content,
      isLoading: false,
      submitButtonText: "Send Message",
      error: "",
      form: {
        "form-name": "bvh-contact-form",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "Email must be valid",
      ],
    };
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
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    async onSubmit() {
      if (this.$refs.form.validate()) {
        this.isLoading = true;
        this.submitButtonText = "Sending...";

        try {
          await axios({
            method: "post",
            url: "/",
            data: this.encode(this.form),
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          });

          // await axios.post("/", this.encode(this.form), {
          //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
          // });

          this.error = "";
          this.submitButtonText = "Sent!";
        } catch (e) {
          this.error = e.message;
          this.isLoading = false;
          this.submitButtonText = "Failed, try again?";
        }
      }
    },
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 17px;
  overflow: hidden;
}
</style>