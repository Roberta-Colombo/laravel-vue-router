<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "./components/HeaderComponent.vue";
import HomePage from "./pages/HomePage.vue";
import AppFooter from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    HomePage,
    AppFooter,
  },
};
</script>

<style scoped></style>
