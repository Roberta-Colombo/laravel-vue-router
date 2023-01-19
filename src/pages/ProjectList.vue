<template>
  <div class="container">
    <h1 class="py-4">Works</h1>

    <div class="row gx-5 gy-5">
      <div
        class="col-12 col-md-6"
        v-for="(item, index) in projects"
        :key="index"
      >
        <ProjectCard :project="item"></ProjectCard>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import ProjectCard from "./ProjectCard.vue";

export default {
  name: "ProjectList",
  data() {
    return {
      store,
      projects: [],
    };
  },
  components: { ProjectCard },
  methods: {
    getProjects() {
      axios.get(`${this.store.apiBaseUrl}/projects`).then((response) => {
        // console.log(response.data.results);
        this.projects = response.data.results;
      });
    },
  },
  mounted() {
    this.getProjects();
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 5rem;
}
</style>
