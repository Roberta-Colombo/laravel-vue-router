<template>
  <div class="parallax">
    <div class="jumbo-txt">Welcome.<br /></div>
  </div>

  <section id="project-list" class="pb-5">
    <ProjectList></ProjectList>
  </section>
</template>

<script>
import ProjectList from "./ProjectList.vue";

export default {
  name: "HomePage",
  components: { ProjectList },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
//.jumbo {
// background: rgb(143, 160, 245);
// background: linear-gradient(
//   353deg,
//   rgba(143, 160, 245, 1) 0%,
//   rgba(255, 160, 179, 0.33665966386554624) 100%
// );
//}

.parallax {
  background-image: url("../assets/img/wall3.jpeg");
  height: 70vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.jumbo-txt {
  text-align: center;
  line-height: 70vh;
  font-size: 5.8rem;
  // color: rgb(238, 127, 229);
  //color: rgb(18, 162, 240);
  color: $white;
  font-weight: bold;
  letter-spacing: 1.2rem;
  -webkit-text-stroke: 1px rgb(236, 239, 243);
}

#project-list {
  padding-top: 50px;
}
</style>
