<template>
  <div class="card pb-5">
    <img
      :src="`${store.img_path}${project.image_1}`"
      class="card-img-top pb-5 scale"
      :alt="project.name"
    />
    <div class="card-body">
      <h2 class="card-title pb-4">
        {{ project.name }}
      </h2>
      <p class="card-text">
        {{ truncateText }}
      </p>

      <router-link
        class="btn"
        :to="{ name: 'single-project', params: { slug: project.slug } }"
      >
        <strong>See more <i class="fa-solid fa-arrow-right ps-1"></i></strong>
      </router-link>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {
      store,
      textMaxLen: 150,
    };
  },
  computed: {
    truncateText() {
      if (this.project.description.length > this.textMaxLen) {
        return this.project.description.substr(0, this.textMaxLen) + "...";
      }
      return this.project.description;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.card {
  border-style: none;
}
.card-img-top {
  width: 600px;
  height: 400px;
}

.scale {
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
}

.card-title {
  font-size: 3rem;
  min-height: 200px;
}
.btn {
  padding: 0;

  i {
    vertical-align: middle;
  }

  &:hover {
    color: $jumbo-blue;
  }
}
</style>
