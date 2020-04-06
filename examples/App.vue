<template>
  <div>
    <div class="navbar-fixed">
      <nav class="vmc-nav">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Vue Material Chips</a>
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
        <div class="col s3">
          <div class="collection">
            <a href="#!" class="collection-item">Alvin</a>
            <a href="#!" class="collection-item active">Alvin</a>
            <a href="#!" class="collection-item">Alvin</a>
            <a href="#!" class="collection-item">Alvin</a>
          </div>
        </div>

        <div class="col s9 border-box border-radius-xl">
          <MaterialChips :chip-data="chipValues" :on-chip-remove="onChipRemove"></MaterialChips>
          <MaterialChips :chip-data="chipContacts" :on-chip-remove="onChipRemove"></MaterialChips>
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
      chipValues: ["Apple", "Microsoft", "Google", "IBM"],
      chipContacts: [
        {
          imgUrl: "/examples/assets/images/happyFace.jpg",
          value: "Vishal Yadav"
        },
        {
          imgUrl: "/examples/assets/images/jerry-vector.jpg",
          value: "Amarjeet Malik"
        },
        {
          imgUrl: "/examples/assets/images/minion.jpeg",
          value: "Sagar Mehar"
        },
        {
          imgUrl: "/examples/assets/images/happyFace.jpg",
          value: "Aman Gupta"
        }
      ]
    };
  },
  methods: {
    onChipRemove(chipItem, currentChips) {
      console.log(chipItem);
      console.log(currentChips);
    }
  }
};
</script>

<style>
</style>