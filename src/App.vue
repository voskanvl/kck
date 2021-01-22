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
          <div class="delivery__checked">
            <Radio
              title="Пункт выдачи заказов Песчаная улица, дом 13"
              :selected="sandstreet"
              @checked="onCheck($event, 'Песчаная улица, дом 13')"
            />
            <Radio
              title="Пункт выдачи заказов Подсосенский переулок, 11"
              @checked="onCheck($event, 'Подсосенский переулок, 11')"
              :selected="!sandstreet"
            />
          </div>
          <Map :choise="selectPoint" />
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
      sandstreet: true,
      selectPoint: "Песчаная улица, дом 13",
    };
  },
  methods: {
    onCheck(event, adress) {
      this.sandstreet = !this.sandstreet;
      this.selectPoint = adress;
      console.log(event, adress, this.sandstreet);
    },
    onChange(event, role) {
      console.log(this.inputData);
      this.inputData[role] = event;
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
