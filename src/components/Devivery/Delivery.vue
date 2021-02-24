<template>
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
</template>

<script>
import Button from "../Button/Button";
import Input from "../Input/Input.vue";

export default {
  name: "App",
  components: {
    Input,
    Button,
  },
  data: () => {
    return {
      inputData: {
        fio: "",
        tel: "",
        adr: "",
        comment: "",
      },
    };
  },
  methods: {
    onChange(event, role) {
      this.inputData[role] = event;
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
@import "../../_App.scss";
</style>
