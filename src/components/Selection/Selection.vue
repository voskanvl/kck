<template>
  <div class="delivery">
    <Map :choise="selectPoint" :activeTab="tab" :selectPoint="selectPoint">
      <Radio
        v-for="i of radios"
        :title="i.title"
        :selected="isSelected(i.adr)"
        :name="i.name"
        :adr="i.adress"
        :key="i.name"
        @checked="onCheck($event, i.adr)"
      />
    </Map>
    <div class="delivery__sent">
      <Button>Отправить</Button>
    </div>
  </div>
</template>

<script>
import Button from "../Button/Button";
import Map from "../Map_/Map";
import Radio from "../Radio/Radio";
import takePoints from "../../takePoints.json";

export default {
  name: "App",
  components: {
    Button,
    Map,
    Radio,
  },
  props: { activeTab: String },
  data: () => {
    return {
      selectPoint: "Подсосенский переулок, 11",
      radios: null,
      tab: "",
    };
  },
  methods: {
    onCheck(event, adress) {
      this.selectPoint = adress;
    },
    isSelected(adress) {
      return this.selectPoint === adress;
    },
  },
  mounted() {
    this.radios = takePoints;
    this.tab = this.activeTab;
  },
};
</script>

<style lang="scss" scoped>
@import "../../_App.scss";
</style>
