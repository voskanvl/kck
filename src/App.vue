<template>
  <div id="app">
    <h1>Выберите способ доставки</h1>
    <Tabs>
      <Tab name="Доставка" :selected="true">
        <div class="form1">
          <Input
            title="ФИО"
            placeholder="Только кирилица"
            role="fio"
            @change="onChange($event, 'fio')"
          />
          <Input
            title="Телефон"
            placeholder="+7 (___) ___-__-__"
            role="tel"
            @change="onChange($event, 'tel')"
          />
          <Input
            title="Адрес доставки"
            placeholder="Город, улица, дом"
            role="adr"
            @change="onChange($event, 'adr')"
          />
          <Input title="Комментарий" textarea role="comment" />
          <Button :disabled="!validated"> Отправить </Button>
        </div>
      </Tab>
      <Tab name="Самовывоз">
        <div class="delivery">
          <Map :choise="selectPoint"
            ><Radio
              title="Пункт выдачи заказов Песчаная улица, дом 13"
              :selected="isSelected('Песчаная улица, дом 13')"
              @checked="onCheck($event, 'Песчаная улица, дом 13')"
              name="Песчаная"
              adr="Песчаная улица, дом 13"
              :coords="[55.801131, 37.508167]"
            />
            <Radio
              title="Пункт выдачи заказов Подсосенский переулок, 11"
              @checked="onCheck($event, 'Подсосенский переулок, 11')"
              :selected="isSelected('Подсосенский переулок, 11')"
              name="Подсосенский"
              adr="Подсосенский переулок, 11"
              :coords="[55.757556, 37.651592]"
            />
            <Radio
              title="Пункт выдачи заказов Новый"
              @checked="onCheck($event, 'Новый, 11')"
              :selected="isSelected('Новый, 11')"
              name="Новый"
              adr="Подсосенский переулок, 11"
              :coords="[55.747556, 37.641592]"
            />
          </Map>
          <div class="delivery__sent">
            <Button>Отправить</Button>
          </div>
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Button from "./components/Button/Button.vue";
import Radio from "./components/Radio/Radio.vue";
import Tabs from "./components/Tabs/Tabs.vue";
import Tab from "./components/Tab/Tab.vue";
import Input from "./components/Input/Input.vue";
import Map from "./components/Map/Map.vue";

export default {
  name: "App",
  components: {
    Input,
    Button,
    Radio,
    Tabs,
    Tab,
    Map,
  },
  data: () => {
    return {
      text: "",
      inputData: {
        fio: "",
        tel: "",
        adr: "",
      },
      sandstreet: String,
      selectPoint: "Песчаная улица, дом 13",
    };
  },
  methods: {
    onCheck(event, adress) {
      this.sandstreet = adress;
      this.selectPoint = adress;
    },
    onChange(event, role) {
      this.inputData[role] = event;
    },
    isSelected(adress) {
      return this.sandstreet === adress;
    },
  },
  computed: {
    validated() {
      return (
        this.inputData.fio &&
        this.inputData.tel &&
        this.inputData.tel.match(/\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/) &&
        this.inputData.adr
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "_App.scss";
</style>
