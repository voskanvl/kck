<template>
  <div id="app">
    <h1>Выберите способ доставки</h1>
    <Tabs @changeTab="activeTab = $event">
      <Tab name="Доставка" selected="true">
        <Delivery />
      </Tab>
      <Tab name="Самовывоз">
        <Selection activeTab="Доставка" />
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
};
</script>

<style lang="scss" scoped>
@import "_App.scss";
</style>
