<template>
  <div class="input">
    <div class="title">{{title}}</div>
    <input @input="$emit('change', $event.target.value)" :placeholder="placeholder" :disabled="disabled" :error="!!errorMessage" v-if="!textarea"/>
    <textarea @input="$emit('change', $event.target.value)" :placeholder="placeholder" :disabled="disabled" :error="!!errorMessage" v-else/>
    <div class="error" v-if="!!errorMessage">{{errorMessage}}</div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    title:String,
    placeholder:String,
    disabled:Boolean,
    errorMessage:String,
    textarea:Boolean
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$--input-border-clr: rgb(218,222,240);
$--input-text-clr: rgb(184,190,216);
$--input-disabled-bg: rgb(237,238,239);
$--input-error-clr: rgb(255,30,56);

.input{
  margin-bottom: 1rem;
  width: 100%;
}
.input > input, .input > textarea{
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid $--input-border-clr;
  outline: none;
  color: black;
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;
  &::placeholder{
    color: $--input-text-clr;
  }
  &:disabled{
    border: none;
  background-color: $--input-disabled-bg;
  }
  &[error='true']{
    border: 1px solid $--input-error-clr;
  }
}
.input > textarea{
  height: 8rem;
}
.title{
  font-size: 10px;
  margin-bottom: 0.5rem;
}
.error{
  color: $--input-error-clr;
  font-size: 9px;
}

</style>
