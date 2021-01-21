<template>
  <div>
    <nav class="tabs">
      <ul class="tabs__headerlist">
        <li
          v-for="(tab, idx) in tabs"
          :key="'tab' + idx"
          @click="select(tab)"
          :class="{ active: tab.name === active }"
        >
          <a>{{ tab.name }}</a>
        </li>
      </ul>
    </nav>
    <div class="tabs__details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {},
  data() {
    return { tabs: [], active: "" };
  },
  mounted() {
    this.tabs = this.$children;
    this.active = this.tabs[0].name;
    // this.$children.forEach(e=>e.selected='false');
    this.tabs[0].isActibe = "true";
  },
  methods: {
    select(selectedTab) {
      console.log(selectedTab.name);
      this.active = selectedTab.name;
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$--tabs-active-bg: white;
$--tabs-passive-bg: rgb(237, 238, 239);
$--tab-active-clr: rgb(0, 150, 218);
ul {
  display: flex;
}
li {
  list-style: none;
  margin-left: -16px;
  cursor: pointer;
}

nav a {
  /* text-decoration: none; */
  color: black;
  background-color: $--tabs-passive-bg;
  position: relative;
  display: inline-block;
  margin: 0 18px;
  padding: 30px 20px;
  border-radius: 3px 3px 0 0;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;

    height: 100%;
    background-color: $--tabs-passive-bg;
  }
  &::before {
    border-radius: 3px 0 0 0;
    left: -13px;
    width: 32px;
  }
  &::after {
    border-radius: 0 3px 0 0;
    transform: skew(24deg);
    width: 40px;
    right: -21px;
    border-right: 1px solid #777;
    z-index: 1;
  }
  &:hover {
    color: $--tab-active-clr;
  }
}

nav li.active {
  & a {
    color: $--tab-active-clr;
    background-color: $--tabs-active-bg;
  }
  & a:before {
    z-index: 1;
    background-color: $--tabs-active-bg; /* overlap prev element */
  }
  & a:after {
    background-color: $--tabs-active-bg;
  }
}
.tabs__details {
  background-color: $--tabs-active-bg;
  margin: -14px 29px;
  padding: 29px 32px;
}
</style>