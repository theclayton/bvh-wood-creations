<template>
  <div>
    <v-row justify="center">
      <v-col md="5">
        <p class="text-subtitle-1">Contact us with the form below:</p>

        <v-form
          name="bvh-contact-form"
          method="POST"
          ref="form"
          lazy-validation
          netlify
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          accept-charset="UTF-8"
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
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
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
          await axios.post("/", this.encode(this.form), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });

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