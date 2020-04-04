<template>
  <div>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Logo</a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="container pt-20">
      <div class="row">
        <!-- <img src="./assets/images/happyFace.jpg" alt="Contact Person" /> -->

        <div class="col s3">
          <div class="collection">
            <a href="#!" class="collection-item">Alvin</a>
            <a href="#!" class="collection-item active">Alvin</a>
            <a href="#!" class="collection-item">Alvin</a>
            <a href="#!" class="collection-item">Alvin</a>
          </div>
        </div>

        <div class="col s9 border-box border-radius-xl">
          <MaterialChips :chip-values="chipValues"></MaterialChips>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialChips from "../src/index";
export default {
  name: "App",
  components: {
    MaterialChips
  },
  data() {
    return {
      chipValues: ["Apple", "Microsoft", "Google", "IBM"]
    };
  }
};
</script>

<style>
</style>