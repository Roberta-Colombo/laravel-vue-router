<template>
  <div>sono header</div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      navLinks: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Works",
          routeName: "projects",
        },
        {
          label: "About me",
          routeName: "about",
        },
        {
          label: "Contacts",
          routeName: "contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
