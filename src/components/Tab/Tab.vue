<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    name: { required: true },
    selected: { default: false },
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.isActive = this.selected;
  },
  watch: {
    isActive: function (val) {
      if (val && this.$children[0]?.tab) this.$children[0].tab = this.name;
    },
  },
};
</script>
<style scoped>
@import "_Tab.scss";
</style>



