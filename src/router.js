import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectList from "./pages/ProjectList.vue";
import AboutMe from "./pages/AboutMe.vue";
import SingleProject from "./pages/SingleProject.vue";
import ContactMe from "./pages/ContactMe.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutMe,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectList,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactMe,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
    {
      path: "/*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

export { router };
