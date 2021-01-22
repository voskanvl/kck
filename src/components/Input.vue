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
        console.log(im.value);
        return { ok: true, errorMessage: "" };
      }
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$--input-border-clr: rgb(218, 222, 240);
$--input-text-clr: rgb(184, 190, 216);
$--input-disabled-bg: rgb(237, 238, 239);
$--input-error-clr: rgb(255, 30, 56);

.input {
  margin-bottom: 1rem;
  width: 100%;
}
.input > input,
.input > textarea {
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid $--input-border-clr;
  outline: none;
  color: black;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  &::placeholder {
    color: $--input-text-clr;
  }
  &:disabled {
    border: none;
    background-color: $--input-disabled-bg;
  }
  &[error="true"] {
    border: 1px solid $--input-error-clr;
  }
}
.input > textarea {
  height: 8rem;
}
.title {
  font-size: 14px;
  margin-bottom: 0.5rem;
}
.error {
  color: $--input-error-clr;
  font-size: 9px;
}
</style>

//TODO https://github.com/uNmAnNeR/imaskjs/tree/master/packages/vue-imask