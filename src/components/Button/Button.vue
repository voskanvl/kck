<template>
  <div class="button" :class="{ disabled }">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "Button";
</style>
