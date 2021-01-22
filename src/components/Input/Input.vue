<template>
  <div class="input">
    <div class="title">{{ title }}</div>
    <input
      @input="inputHandler($event)"
      :placeholder="placeholder"
      :disabled="disabled"
      :error="!!errorMessage"
      ref="input"
      v-if="!textarea"
    />
    <textarea
      @input="inputHandler($event)"
      :placeholder="placeholder"
      :disabled="disabled"
      :error="!!errorMessage"
      v-else
    />
    <div class="error" v-if="!!errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script>
import Inputmask from "inputmask";
export default {
  name: "Input",
  props: {
    title: String,
    placeholder: String,
    disabled: Boolean,
    textarea: Boolean,
    role: String,
  },
  data() {
    return {
      errorMessage: "",
      errors: {
        fio: "Пожалуйста, испоьзуйте только русские буквы, пробелы  и тире",
      },
    };
  },

  methods: {
    inputHandler({ target: { value } }) {
      const { ok, errorMessage } = this.validate(value, this.role);
      if (ok) {
        this.errorMessage = "";
        this.$emit("change", value);
      } else {
        this.errorMessage = errorMessage;
      }
    },
    validate(event, role) {
      if (!role || role === "comment") return { ok: true };
      if (role === "fio" || role === "adr") {
        const isCyrilic = !~event.search(/[^а-яёА-ЯЁ|\s|-]/g);
        return {
          ok: isCyrilic,
          errorMessage: isCyrilic ? "" : this.errors.fio,
        };
      }
      if (role === "tel") {
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(this.$refs.input);
        return { ok: true, errorMessage: "" };
      }
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "Input";
</style>

//TODO https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask