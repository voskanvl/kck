<template>
  <div id="app">
    <h1>Выберите способ доставки</h1>
    <Tabs @changeTab="changeTab($event)">
      <Tab name="Доставка" :selected="activeTab === 'Доставка'">
        <Delivery />
      </Tab>
      <Tab name="Самовывоз" :selected="activeTab === 'Самовывоз'">
        <Selection :activeTab="activeTab" />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "./components/Tabs/Tabs.vue";
import Tab from "./components/Tab/Tab.vue";
import Delivery from "./components/Devivery/Delivery";
import Selection from "./components/Selection/Selection";

export default {
  name: "App",
  components: {
    Tabs,
    Tab,
    Delivery,
    Selection,
  },
  data: () => {
    return {
      activeTab: "Доставка",
    };
  },
  methods: {
    changeTab(event) {
      this.activeTab = event.newValue.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "_App.scss";
</style>
