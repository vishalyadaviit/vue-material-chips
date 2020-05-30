# vue-material-chips
Vue.js plugin made for chips using material theme

[![downloads](https://badgen.net/npm/dt/vue-material-chips)](http://npm-stats.com/~packages/vue-material-chips)
[![npm-version](https://badgen.net/npm/v/vue-material-chips)](https://www.npmjs.com/package/vue-material-chips)
[![github-tag](https://badgen.net/github/tag/nemeton-x/vue-material-chips)](https://github.com/nemeton-x/vue-material-chips/)

## [JSFiddle](https://jsfiddle.net/nemeton_x/axrcpu1z/)

## Installation
```bash
# npm
npm install --save vue-material-chips 
```
## Examples
![](examples/assets/images/chipExamples.png)

## Usage
```js

<template>
  <div>
    <h3>Basic Chips</h3>
    <VueMaterialChips :chip-data="['Apple', 'Microsoft', 'Google', 'IBM']"></VueMaterialChips>

    <h3>Chips | Custom css with cssClass prop</h3>
    <VueMaterialChips :chip-data="chipValues" css-class="black-chip">

    <h3>Chips | OnChipsRemove Prop</h3>
    <VueMaterialChips :chip-data="['Apple', 'Microsoft', 'Google', 'IBM']" :on-chip-remove="onChipRemove"></VueMaterialChips>
    
    <h3>Large Chips</h3>
    <VueMaterialChips :chip-data="['Apple', 'Microsoft', 'Google', 'IBM']" chip-type="large"></VueMaterialChips>

    <h3>Chips with Image</h3>
    <VueMaterialChips :chip-data="chipValues" css-class="black-chip" chip-type="large" :on-chip-remove="onChipRemove"></VueMaterialChips>
  </div>
</template>

<script>
import VueMaterialChips from 'vue-material-chips';

export default {
  components: [VueMaterialChips],
  data() {
    return {
      chipValues: [{
          imgUrl: require("your relative image path"),
          value: "Amarjeet Malik"
        }, {
          imgUrl: require("your relative image path"),
          value: "Aman Gupta"
        }]
    }
  },
  methods: {
    onChipRemove(chipItem, currentChips) {
      //chiItem gives you the removed currentChip
      //currentChips gives you all the remaning chips in the chipData
    }
  }
}
</script>

<style>
  .black-chip {
    background-color: #343a40 !important;
    color: #ffffff !important;
  }

  .black-chip.mt-close:before {
    background-color: white;
  }

  .black-chip.mt-close:after {
    background-color: white;
  }
</style>

```

## Available options
The API methods accepts these options:

| Attribute        | Type                | Default              | Description      |
| :---             | :---:               | :---:                | :---             |
| chipData         | Array               | --                   |  a required field, accepts array, if you would like to pass chipData with imageUrl pass it this way eg. [{ imgUrl: "", value: "" }]   |
| chipType         | String              | normal               |  Accepts 3 values `small`, `normal`, `large`   |
| cssClass         | String              | --                   |  You can pass a custom css class to chips with this prop  |
| onChipRemove     | Function            | --                   |  If passed, chips will have a cancel button and onChipRemove will get invoked with chip record  |
        

## Credits
* MaterializeCSS [Chips](https://materializecss.com/chips.html)
