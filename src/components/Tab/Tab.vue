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
    selected: function (val) {
      let activeTab = this.$slots.default[0].componentOptions.propsData
        ?.activeTab;
      if (val && activeTab) {
        activeTab = this.name;
      }
    },
  },
};
</script>
<style scoped>
@import "_Tab.scss";
</style>



