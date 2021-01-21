<template>
  <div id="app">
    <Input
      title="title"
      placeholder="Placeholder"
      @change="onChange($event)"
      errorMessage="error"
    />
    <Radio title="Radio button" @checked="checked($event)" :disabled="true" />
    <Tabs>
      <Tab name="Доставка" :selected="true">
        <div class="form1">
          <Input title="ФИО" placeholder="Только кирилица" />
          <Input title="Телефон" placeholder="+7 (___) ___-__-__" />
          <Input title="Адрес доставки" placeholder="Город, улица, дом" />
          <Input title="Комментарий" textarea />
          <Button>Отправить</Button>
        </div>
      </Tab>
      <Tab name="Самовывоз">
        <div>How much we do it for</div>
      </Tab>
      <Tab name="Контакты">
        <div>Контакты</div>
      </Tab>
      <Tab name="О нас">
        <div>О нас</div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
// import Button from "./components/Button.vue";
import Radio from "./components/Radio.vue";
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
import Input from "./components/Input.vue";

export default {
  name: "App",
  components: {
    Input,
    // Button,
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

<style lang="scss">
:root {
  --btn-normal-bg: rgb(0, 150, 218);
  --btn-clr: white;
  --btn-hover-bg: rgb(0, 129, 188);
  --btn-pressed-bg: rgb(1, 93, 135);
  --btn-disabled-bg: rgb(237, 238, 239);
  --btn-disabled-clr: rgb(184, 190, 216);
  --rad-normal: rgb(219, 223, 240);
  --rad-hover: rgb(6, 152, 219);
  --rad-selected: rgb(6, 152, 219);
  --rad-disabled: rgb(237, 238, 239);
  --tabs-current-bg: white;
  --tabs-passive-bg: rgb(237, 238, 239);
  --tab-active-clr: rgb(0, 150, 218);
}
#app {
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  font-size: 14px;
  background-color: #f6f6f6;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
}
Input {
  width: 100%;
}
.form1 {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "fio tel"
    "adr adr"
    "com com"
    "com com";
  & > .input:nth-child(3) {
    grid-area: adr;
  }
  & > .input:nth-child(4) {
    grid-area: com;
    height: 10rem;
  }
}
/* ---media query */
</style>
