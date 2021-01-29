<template>
  <div id="app">
    <h1>Выберите способ доставки</h1>
    <Tabs @changeTab="changeTab($event)">
      <Tab name="Доставка" :selected="activeTab === 'Доставка'">
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
          <Input
            title="Комментарий"
            textarea
            role="comment"
            @change="onChange($event, 'comment')"
          />
          <Button :disabled="!validated"> Отправить </Button>
        </div>
      </Tab>
      <Tab name="Самовывоз" :selected="activeTab === 'Самовывоз'">
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
import Map from "./components/Map_/Map.vue";

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
      inputData: {
        fio: "",
        tel: "",
        adr: "",
        comment: "",
      },
      selectPoint: "Подсосенский переулок, 11",
      activeTab: "Доставка",
    };
  },
  methods: {
    onCheck(event, adress) {
      this.selectPoint = adress;
      console.log(
        "🚀 ~ file: App.vue ~ line 112 ~ onCheck ~ this.selectPoint",
        this.selectPoint
      );
    },
    onChange(event, role) {
      this.inputData[role] = event;
    },
    isSelected(adress) {
      return this.selectPoint === adress;
    },
    changeTab(event) {
      this.activeTab = event.newValue.name;
    },
  },
  computed: {
    validated() {
      return (
        this.inputData.fio &&
        this.inputData.tel &&
        this.inputData.tel.match(/\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/) &&
        this.inputData.adr &&
        this.inputData.comment
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "_App.scss";
</style>
