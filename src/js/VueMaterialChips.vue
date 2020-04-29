<template>
  <div>
    <div class="mt-chip" v-for="(chipItem, index) in currentChips" :class="computedCssClass">
      <img v-if="isObjectLoaded(chipItem) && chipItem.imgUrl" :src="chipItem.imgUrl" alt="No image found" />
      {{isObjectLoaded(chipItem) ? chipItem.value : chipItem}}
      <div v-if="onChipRemove" @click="onRemoveClick(chipItem, index)" class="mt-close" alt="close" :class="chipType ? `mt-close-${chipType}` : ''" />
    </div>
  </div>
</template>

<script>
export default {
  name: "VueMaterialChips",
  props: {
    chipType: {
      type: String,
      default: () => ""
    },
    cssClass: {
      type: String,
      default: () => ""
    },
    chipData: {
      type: Array,
      required: true,
      default: () => []
    },
    onChipRemove: {
      type: Function
    }
  },
  data() {
    return {
      currentChips: this.$props.chipData
    };
  },
  computed: {
    computedCssClass() {
      const { chipType, cssClass } = this.$props;
      let resultClass = "";
      if (chipType) {
        resultClass = `mt-chip-${chipType}`;
      }
      if (cssClass) {
        resultClass = `${resultClass} ${cssClass}`;
      }
      return resultClass;
    }
  },
  methods: {
    isObjectLoaded(obj) {
      return obj && typeof obj === "object" && Object.keys(obj).length > 0;
    },
    onRemoveClick(chipItem, chipIndex) {
      this.$data.currentChips = this.$data.currentChips.filter((chip, index) => index != chipIndex);
      this.$props.onChipRemove(chipItem, this.$data.currentChips);
    }
  }
};
</script>