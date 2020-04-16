<template>
  <div>
    <div class="navbar-fixed">
      <nav class="vmc-nav">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo center">Vue Material Chips</a>
          <!-- <ul class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
          </ul>-->
        </div>
      </nav>
    </div>
    <div class="container pt-20">
      <div class="row">
        <div class="col s12 l10 offset-l1 border-box box-padding border-radius-xl">
          <div class="row">
            <div class="col s12 mt-50">
              <ul class="collapsible box-shadow-none">
                <li>
                  <div class="collapsible-header">
                    <h5 class="m-0 line-height-30">Basic Chips</h5>
                    <button class="btn btn-transparent text-default ml-auto" type="button">
                      Code
                      <i class="material-icons text-default right">code</i>
                    </button>
                  </div>
                  <div class="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
              </ul>
              <MaterialChips :chip-data="chipValues"></MaterialChips>
            </div>
            <div class="col s12 mt-50">
              <ul class="collapsible box-shadow-none">
                <li>
                  <div class="collapsible-header">
                    <h5 class="m-0 line-height-30">Chips | OnChipRemove Prop</h5>
                    <button class="btn btn-transparent text-default ml-auto" type="button">
                      Code
                      <i class="material-icons text-default right">code</i>
                    </button>
                  </div>
                  <div class="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
              </ul>
              <MaterialChips :chip-data="chipContacts" :on-chip-remove="onChipRemove"></MaterialChips>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import MaterialChips from "../src/index";
// import MaterialChips from "../dist/index";
import MaterialChips from "vue-material-chips";

import "../dist/main.css";

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
          imgUrl: "./assets/images/happyFace.jpg",
          value: "Vishal Yadav"
        },
        {
          imgUrl: "./assets/images/jerry-vector.jpg",
          value: "Amarjeet Malik"
        },
        {
          imgUrl: "./assets/images/minion.jpeg",
          value: "Sagar Mehar"
        },
        {
          imgUrl: "./assets/images/happyFace.jpg",
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
  },
  mounted() {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  }
};
</script>