<template>
  <div>
    <h3>Material Chips</h3>
    <div class="chip" v-for="(chipItem, index) in currentChips">
      <img v-if="isObjectLoaded(chipItem) && chipItem.imgUrl" :src="chipItem.imgUrl" alt="No image found" />
      {{isObjectLoaded(chipItem) ? chipItem.value : chipItem}}
      <i
        v-if="onChipRemove"
        class="close material-icons"
        @click="onRemoveClick(chipItem, index)"
      >close</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialChips",
  props: {
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

<style>
</style>