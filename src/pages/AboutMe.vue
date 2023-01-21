<template>
  <div class="container about fade-in">
    <h1>About me</h1>
    <div class="row justify-content-between align-items-center gx-0">
      <div class="about-text col-12 col-md-6">
        <strong>Hello.</strong> I'm Roberta. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Assumenda mollitia perferendis esse alias
        laboriosam cupiditate nulla quo beatae! Reiciendis ab voluptatum nobis
        quibusdam. Eveniet laboriosam, ducimus eaque tempore incidunt expedita.
        <div class="mt-5">
          <a class="pe-3" href="#">Github</a><a href="#">Linkedin</a>
        </div>
      </div>
      <div class="profile-pic col-sm-12 col-md-6 mt-sm-5 ms-sm-auto">
        <div class="frame">
          <img src="../assets/img/profile_bw.jpg" alt="Profile picture" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

h1 {
  font-size: 5rem;
}

.about {
  padding-top: 4rem;
  padding-bottom: 9rem;
}

.profile-pic {
  height: 400px;
  width: 400px;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transform: scaleX(-1);
  }
}

.frame {
  background-color: $jumbo-pink;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 4%;
}

.about-text {
  line-height: 1.8rem;
}

a {
  color: $jumbo-blue;
  font-weight: bold;
}
</style>
