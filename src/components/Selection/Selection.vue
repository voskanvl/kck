<template>
  <div class="delivery">
    <Map
      :choise="selectPoint"
      :activeTab="activeTab"
      :selectPoint="selectPoint"
    >
      <Radio
        title="Пункт выдачи заказов Подсосенский переулок, 11"
        @checked="onCheck($event, 'Подсосенский переулок, 11')"
        :selected="isSelected('Подсосенский переулок, 11')"
        name="Подсосенский"
        adr="Москва, Подсосенский переулок, 11"
      />
      <Radio
        title="Пункт выдачи заказов Песчаная улица, дом 13"
        :selected="isSelected('Песчаная улица, дом 13')"
        @checked="onCheck($event, 'Песчаная улица, дом 13')"
        name="Песчаная"
        adr="Москва, Песчаная улица, дом 13"
      />
      <Radio
        title="Пункт выдачи заказов Новый"
        @checked="onCheck($event, 'Новый, 11')"
        :selected="isSelected('Новый, 11')"
        name="Новый"
        adr="Москва, Новый, 11"
      />
      <Radio
        title="Пункт выдачи заказов Старый"
        @checked="onCheck($event, 'Старый, 10')"
        :selected="isSelected('Старый, 10')"
        name="Старый"
        adr="Москва, Старый, 10"
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
};
</script>

<style lang="scss" scoped>
@import "../../_App.scss";
</style>
