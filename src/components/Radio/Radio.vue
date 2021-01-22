<template>
  <div class="radio" :disabled="disabled" @click="clickHandle">
    <div class="check" :class="{ disabled, selected }">
      <div class="dot" v-show="selected"></div>
    </div>
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Radio",
  props: {
    selected: Boolean,
    disabled: Boolean,
    title: String,
  },
  data() {
    return {
      checked: this.selected,
    };
  },
  methods: {
    clickHandle() {
      if (!this.disabled) {
        // this.checked = !this.checked;
        this.$emit("checked", this.checked);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "Radio";
</style>
