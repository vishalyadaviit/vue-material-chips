<template>
  <div>
    <div class="navbar-fixed">
      <nav class="vmc-nav">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo center">Vue Material Chips</a>
        </div>
      </nav>
    </div>
    <div class="container pt-20">
      <div class="row">
        <div class="col s12 l10 offset-l1 border-box box-padding border-radius-xl">
          <div class="row mt-50">
            <div class="col s12">
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
              <div class="col s12">
                <VueMaterialChips :chip-data="chipValues"></VueMaterialChips>
              </div>
              <div class="col s12 mt-10">
                <VueMaterialChips :chip-data="animals" css-class="blue-chip"></VueMaterialChips>
              </div>
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
              <div class="col s12 mt-10">
                <VueMaterialChips :chip-data="chipContacts" :on-chip-remove="onChipRemove"></VueMaterialChips>
              </div>
            </div>
            <div class="col s12 mt-50">
              <ul class="collapsible box-shadow-none">
                <li>
                  <div class="collapsible-header">
                    <h5 class="m-0 line-height-30">Small Chips</h5>
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
              <div class="col s12 mt-10">
                <VueMaterialChips :chip-data="chipValues" chip-type="small"></VueMaterialChips>
              </div>
              <div class="col s12 mt-10">
                <VueMaterialChips :chip-data="chipValues" css-class="black-chip" chip-type="small" :on-chip-remove="onChipRemove"></VueMaterialChips>
              </div>
            </div>
            <div class="col s12 mt-50">
              <ul class="collapsible box-shadow-none">
                <li>
                  <div class="collapsible-header">
                    <h5 class="m-0 line-height-30">Large Chips</h5>
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
              <div class="col s12 mt-10">
                <VueMaterialChips :chip-data="chipValues" css-class="black-chip" chip-type="large"></VueMaterialChips>
              </div>

              <div class="col s12 mt-10">
                <VueMaterialChips :chip-data="chipContacts" chip-type="large" :on-chip-remove="onChipRemove"></VueMaterialChips>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueMaterialChips from "vue-material-chips";
import VueMaterialChips from "../src/index";

export default {
  name: "App",
  components: {
    VueMaterialChips
  },
  data() {
    return {
      chipValues: ["Apple", "Microsoft", "Google", "IBM"],
      animals: ["Cheetah", "Lion", "Kangaroo", "Elephant", "Penguin"],
      chipContacts: [
        {
          imgUrl: "./assets/images/smiley.jpg",
          value: "Vishal Yadav"
        },
        {
          imgUrl: "./assets/images/happyFace.jpg",
          value: "Amarjeet Malik"
        },
        {
          imgUrl: "./assets/images/elephant.jpg",
          value: "Sagar Mehar"
        },
        {
          imgUrl: "./assets/images/unicorn.jpg",
          value: "Aman Gupta"
        }
      ]
    };
  },
  methods: {
    onChipRemove(chipItem, currentChips) {
      alert(`Hey! You just closed ${chipItem && typeof chipItem == "object" ? chipItem.value : chipItem}`);
    }
  },
  mounted() {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  }
};
</script>