<template>
  <footer>
    <div>
      <div class="container">
        <div class="text">
          Follow me:
          <a href="#"><i class="fa-brands fa-linkedin px-3"></i></a>
          <a href="#"><i class="fa-brands fa-github ps-2"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

footer {
  color: $white;
  background-color: $soft-black;
  height: 200px;

  a {
    color: $white;
    font-size: 1.7rem;

    &:hover {
      color: $jumbo-blue;
    }
  }
}

.text {
  text-align: right;
  line-height: 200px;
  font-size: 1.3rem;
}
</style>
