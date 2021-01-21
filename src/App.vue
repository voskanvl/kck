<template>
  <div id="app">
    <h1>Выберите способ доставки</h1>
    <Tabs>
      <Tab name="Доставка" :selected="true">
        <div class="form1">
          <Input title="ФИО" placeholder="Только кирилица" role="fio" />
          <Input title="Телефон" placeholder="+7 (___) ___-__-__" role="tel" />
          <Input
            title="Адрес доставки"
            placeholder="Город, улица, дом"
            role="adr"
          />
          <Input title="Комментарий" textarea />
          <Button>Отправить</Button>
        </div>
      </Tab>
      <Tab name="Самовывоз">
        <div><Input title="Адрес доставки" /></div>
      </Tab>
      <Tab name="Контакты">
        <div>
          <Input
            title="title"
            placeholder="Placeholder"
            @change="onChange($event)"
            errorMessage="error"
          />
          <Radio
            title="Radio button"
            @checked="checked($event)"
            :disabled="true"
          />
        </div>
      </Tab>
      <Tab name="О нас">
        <div>
          <Radio
            title="Radio button"
            @checked="checked($event)"
            :disabled="false"
          />
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

export default {
  name: "App",
  components: {
    Input,
    Button,
    Radio,
    Tabs,
    Tab,
  },
  data: () => {
    return {
      text: "",
    };
  },
  methods: {
    onChange(event) {
      console.log(event);
      this.text = event;
    },
    checked(event) {
      console.log(event);
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
</style>
