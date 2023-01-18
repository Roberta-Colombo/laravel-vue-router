<template>
  <div class="card" style="width: 18rem">
    <img
      :src="`${store.imgPath}${project.image_1}`"
      class="card-img-top"
      :alt="project.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>

      <router-link
        class="btn btn-primary"
        :to="{ name: 'single-project', params: { slug: project.slug } }"
      >
        See more
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {
      store,
      contentMaxLen: 100,
    };
  },
};
</script>

<style lang="scss" scoped></style>
