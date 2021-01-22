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
import Button from "./components/Button.vue";
import Radio from "./components/Radio.vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
import Input from "./components/Input.vue";
import Map from "./components/Map.vue";

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
    checked(event) {
      console.log(event);
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
#app {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  font-size: 14px;
  background-color: f6f6f6;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}
h1 {
  padding: 0 100px;
}
Input {
  width: 100%;
}
.delivery__checked {
  display: flex;
  padding: 41px 0px;
}
.delivery__sent {
  display: flex;
  justify-content: flex-end;
  padding: 41px 0px;
}
.form1 {
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "fio tel"
    "adr adr"
    "com com"
    "com com"
    "emp but";
  & > .input:nth-child(3) {
    grid-area: adr;
  }
  & > .input:nth-child(4) {
    grid-area: com;
    height: 10rem;
  }
  & > .button {
    position: relative;
    grid-column: 2/3;
    justify-self: end;
  }
}
@media (max-width: 622px) {
  h1 {
    font-size: 4.5vw;
    padding: 0;
    text-align: center;
  }
}
@media (max-width: 768px) {
  .delivery__checked {
    padding: 0;
    flex-direction: column;
    & > .radio {
      margin-bottom: 24px;
    }
  }
}
</style>
