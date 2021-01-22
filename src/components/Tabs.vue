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
    // this.$children.forEach(e=>e.selected='false');
    // this.tabs[0].isActibe = "true";
  },
  methods: {
    select(selectedTab) {
      console.log(selectedTab.name);
      console.log(this.activeIndex);
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
$--tabs-active-bg: white;
$--tabs-passive-bg: #edeeef;
$--tab-active-clr: rgb(0, 150, 218);
.tabs__less-downhover,
.tabs__less-down,
.tabs__less-up {
  display: none;
}
ul {
  display: flex;
  position: relative;
  padding: 0 100px;
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
  margin: 0 16px;
  padding: 24px 20px;
  border-radius: 3px 3px 0 0;
  text-indent: 6px;
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
    width: 39px;
  }
  &::after {
    border-radius: 0 3px 0 0;
    transform: skew(28.4deg);
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
  position: absolute;
  background-color: $--tabs-active-bg;
  margin: -27px -1px;
  padding: 29px 32px;
  // width: 100%;
  top: 91px;
  left: 89px;
  right: 100px;
  box-sizing: border-box;
}

/** ---- media query */

@media (max-width: 768px) {
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  li {
    box-sizing: border-box;
    display: flex;
    padding: 21px 16px;
    margin: 0;
    order: 2;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #dadef0;
    background-color: $--tabs-passive-bg;
    &:nth-child(1) {
      order: 0;
    }
    & > .tabs__less-down {
      display: block;
    }
    &:hover {
      a {
        color: $--tab-active-clr;
      }
      .tabs__less-down {
        display: none;
      }
      .tabs__less-downhover {
        display: block;
      }
    }
  }
  nav a {
    /* text-decoration: none; */
    color: black;
    background-color: $--tabs-passive-bg;
    position: static;
    margin: 0px;
    padding: 0;
    &::before,
    &::after {
      content: "";
      position: initial;
      top: initial;
      height: initial;
      background-color: $--tabs-passive-bg;
    }
    &::before {
      border-radius: initial;
      left: initial;
      width: initial;
    }
    &::after {
      border-radius: initial;
      transform: initial;
      width: initial;
      right: initial;
      border-right: initial;
      z-index: initial;
    }
  }
  nav li.active {
    background-color: $--tabs-active-bg;
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
    & > .tabs__less-up {
      display: block;
    }
    & > .tabs__less-down {
      display: none;
    }
    &:hover {
      .tabs__less-downhover {
        display: none;
      }
      .tabs__less-down {
        display: none;
      }
    }
  }
  .tabs__details {
    position: relative;
    background-color: $--tabs-active-bg;
    margin: 0;
    padding: 21px 16px;
    width: 100%;
    top: 0px;
    left: 0;
    box-sizing: border-box;
    order: 1;
  }
  .form1 {
    position: absolute;
    top: 10rem;
  }
}
</style>