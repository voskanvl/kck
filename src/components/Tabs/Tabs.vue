<template>
  <div>
    <nav class="tabs">
      <ul class="tabs__headerlist">
        <li
          v-for="(tab, idx) in tabs"
          :key="'tab' + idx"
          @click="select(tab)"
          :class="{ active: tab.name === active.name }"
          :style="{ order: idx <= activeIndex ? 0 : 2 }"
        >
          <a>{{ tab.name }}</a>
          <img
            class="tabs__less-up"
            src="https://img.icons8.com/material-rounded/24/4a90e2/chevron-up.png"
          />
          <img
            class="tabs__less-down"
            src="https://img.icons8.com/material-rounded/24/000000/chevron-down.png"
          />
          <img
            class="tabs__less-downhover"
            src="https://img.icons8.com/material-rounded/24/4a90e2/chevron-down.png"
          />
        </li>
        <li class="tabs__details" id="form">
          <slot></slot>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {},
  data() {
    return { tabs: [], active: {} };
  },
  mounted() {
    this.tabs = this.$children;
    this.active = this.tabs[0];
  },
  methods: {
    select(selectedTab) {
      this.active = selectedTab;
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  computed: {
    activeIndex() {
      return this.tabs.findIndex((tab) => tab.name === this.active.name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Tabs";
</style>