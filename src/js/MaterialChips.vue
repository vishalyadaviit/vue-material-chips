<template>
  <div>
    <h3>Material Chips</h3>
    <div v-for="(val, index) in chipValues">
      <div class="chip">
        {{val}}
        <i class="close material-icons">close</i>
      </div>
    </div>
    <div class="chip">
      <!-- <img src="../images/happyFace.jpg" alt="Contact Person" /> -->
      Jane Doe
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialChips",
  props: {
    chipValues: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>