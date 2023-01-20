<template>
  <footer>
    <div>
      <div class="container d-flex justify-content-between align-items-center">
        <div class="text small">Roberta Colombo &#169;2023</div>
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
  position: relative;

  a {
    color: $white;
    font-size: 1.7rem;

    &:hover {
      color: $jumbo-blue;
    }
  }
}

.text {
  font-size: 1.3rem;
  padding-top: 130px;
  font-style: italic;
}

.small {
  font-size: 1rem;
}
</style>
