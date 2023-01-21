<template>
  <section v-if="project" class="fade-in">
    <div class="main-img py-5">
      <img :src="`${store.img_path}${project.image_1}`" :alt="project.name" />
    </div>

    <div class="container proj-details">
      <div class="row">
        <div class="col-12 col-md-2">
          <div v-if="project.project_type" class="py-4">
            <h5 class="py-2">Type:</h5>
            <div>
              <i>{{ project.project_type.type }}</i>
            </div>
          </div>

          <div
            v-if="project.technologies && project.technologies.length > 0"
            class="py-3"
          >
            <h5 class="py-2">Stack:</h5>
            <div
              v-for="(technology, index) in project.technologies"
              :key="index"
              class="py-1"
            >
              <i>{{ technology.name }}</i>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-10">
          <h2 class="card-title mt-3 pb-5">
            {{ project.name }}
          </h2>
          <p>
            {{ project.description }}
          </p>

          <div class="mt-5">
            <strong class="pe-2">Github link:</strong>
            <a href="#">{{ project.github_link }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- se non ci sono post si attiva la redirect redirect -->
  <section v-else>Loading...</section>

  <div class="parallax jumbo-txt d-flex justify-content-between">
    <div class="left col-sm-6">
      <router-link :to="{ name: 'projects' }">Go back</router-link>
    </div>
    <div class="right col-6">
      <a href="#">Discover random project</a>
    </div>
    <!-- da sistemare -->
    <!-- <router-link :to= "{ name: 'single-project', params: {slug: getRandomSlug} }" > See random project </router-link> -->
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "SingleProject",
  data() {
    return {
      store,
      project: null,
      slugs: [
        "ea-sed-voluptatem",
        "totam-culpa-sed-voluptatum",
        "laboriosam-nemo-quas-veniam",
      ],
      selectedSlug: "",
    };
  },
  methods: {
    getProject() {
      // console.log(this.$route);
      axios
        .get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`)
        .then((response) => {
          //console.log(response.data.results);
          if (response.data.success) {
            this.project = response.data.results;
          } else {
            //redirect:
            this.$router.push({ name: "not-found" });
          }
        });
    },
  },
  //da rivedere
  computed: {
    getRandomSlug() {
      const randSlug = Math.floor(Math.random() * this.slugs.length);
      this.selectedSlug = this.slugs[randSlug];
      console.log(this.selectedSlug);
    },
  },
  mounted() {
    this.getProject();
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.main-img {
  img {
    width: 100vw;
  }
}

h2 {
  font-size: 3.5rem;
}

.proj-details {
  padding-top: 7rem;
  padding-bottom: 8rem;
}

p {
  line-height: 2rem;
  font-size: 1.3rem;
}

.parallax {
  background-image: url("../assets/img/wall3.jpeg");
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.jumbo-txt {
  line-height: 50vh;
  font-size: 2.5rem;
  color: $white;
  font-weight: 600;
  -webkit-text-stroke: 1px rgb(236, 239, 243);

  a {
    color: whitesmoke;
  }
}

.left {
  text-align: left;
  padding-left: 2rem;
}

.right {
  text-align: right;
  padding-right: 2rem;
}
</style>
