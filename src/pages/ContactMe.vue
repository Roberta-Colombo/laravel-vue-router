<template>
  <div class="container contact fade-in">
    <h1>Contact Me</h1>
    <p class="pb-4">
      Any <span class="blue-txt"><strong>requests</strong></span
      >? Feel free to reach out:
    </p>

    <div v-if="success" class="alert alert-success text-start" role="alert">
      Message sent successfully.
    </div>

    <form @submit.prevent="sendForm()">
      <div class="row">
        <div class="col-12 col-md-6">
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            v-model="name"
            :class="{ 'is-invalid': errors.name }"
            required
          />
          <p
            v-for="(error, index) in errors.name"
            :key="index"
            class="invalid-feedback"
          >
            {{ error }}
          </p>
        </div>

        <div class="col-12 col-md-6 pt-sm-4 pt-md-0">
          <input
            type="text"
            name="surname"
            id="surname"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
            v-model="surname"
            :class="{ 'is-invalid': errors.surname }"
            required
          />
          <p
            v-for="(error, index) in errors.surname"
            :key="index"
            class="invalid-feedback"
          >
            {{ error }}
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-sm-12 pt-sm-4">
          <input
            type="text"
            name="email"
            id="email"
            class="form-control"
            placeholder="Your email"
            aria-label="Your email"
            v-model="email"
            :class="{ 'is-invalid': errors.email }"
            required
          />
          <p
            v-for="(error, index) in errors.email"
            :key="index"
            class="invalid-feedback"
          >
            {{ error }}
          </p>
        </div>
      </div>

      <div class="row align-items-end">
        <div class="col-md-6 col-sm-12 pt-5">
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            v-model="message"
            :class="{ 'is-invalid': errors.message }"
            required
          ></textarea>
          <p
            v-for="(error, index) in errors.message"
            :key="index"
            class="invalid-feedback"
          >
            {{ error }}
          </p>
        </div>

        <div class="col-md-6 col-sm-12 ps-5 ps-sm-3 pt-sm-3">
          <button class="btn" type="submit" :disabled="loading">
            {{ loading ? "Sending..." : "Send" }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ContactMe",
  data() {
    return {
      store,
      name: "",
      surname: "",
      email: "",
      message: "",
      success: false,
      errors: {},
      loading: false,
    };
  },
  methods: {
    sendForm() {
      this.loading = true;
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        message: this.message,
      };
      axios.post(`${this.store.apiBaseUrl}/contact`, data).then((response) => {
        // console.log(response.data);
        this.success = response.data.success;
        if (!this.success) {
          this.errors = response.data.errors;
          //console.log(this.errors);
        } else {
          this.name = "";
          this.surname = "";
          this.email = "";
          this.message = "";
        }
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.contact {
  padding-top: 4rem;
  padding-bottom: 9rem;
}

h1 {
  font-size: 5rem;
  padding-bottom: 4rem;
}

textarea {
  width: 100%;
  height: 150px;
  padding: 10px 0 0 10px;
  border-color: lightgray;
  border-radius: 7px;
}

.btn {
  background-color: $jumbo-pink;

  &:hover {
    background-color: $jumbo-pink;
    opacity: 0.9;
  }
}
</style>
