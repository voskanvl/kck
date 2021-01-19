<template>
  <div id="app">
    <Button >Button pressed</Button>
    <Radio >Radio pressed</Radio>
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Radio from './components/Radio.vue';


export default {
  name: 'App',
  components: {
    Button, Radio
  }
}
</script>

<style>
:root{
  --btn-normal-bg:  rgb(0,150,218);
  --btn-clr:  white;
  --btn-hover-bg:  rgb(0,129,188);
  --btn-pressed-bg:  rgb(1,93,135);
  --btn-disabled-bg:  rgb(237,238,239);
  --btn-disabled-clr:  rgb(184,190,216);
  --rad-normal: rgb(219,223,240);
  --rad-hover: rgb(6, 152, 219);
  --rad-selected: rgb(6, 152, 219);
  --rad-disabled:  rgb(237,238,239);
}
#app {
 font-family: Montserrat, Arial, Helvetica, sans-serif;
 box-sizing: border-box;
}
.normal{
  background-color: rgb(0,150,218);
  color:white;
}
.hover{
  background-color: rgb(199,100,74);
  color:white;
}
</style>
