<template>
  <h1 id="test" >
    TEST
  </h1>
</template>

<script>
export default {
  name: 'Test',
  props: {
    disabled:Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#test{
  background-color: blue;
  &:hover{
    background-color: lightblue;
  }
}
</style>
