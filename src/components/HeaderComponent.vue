<template>
  <header>
    <nav>
      <div class="container">
        <ul class="d-flex justify-content-end pt-4">
          <li v-for="(item, index) in navLinks" :key="index">
            <router-link
              :to="{ name: item.routeName }"
              class="hover-underline-animation"
              active-class="active"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      navLinks: [
        {
          label: "HOME",
          routeName: "home",
        },
        {
          label: "WORKS",
          routeName: "projects",
        },
        {
          label: "ABOUT",
          routeName: "about",
        },
        {
          label: "CONTACT",
          routeName: "contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

ul {
  list-style: none;

  li {
    padding: 20px;
  }
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
  color: $soft-black;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: $soft-black;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: $white;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid rgb(230, 228, 228);
}
</style>
