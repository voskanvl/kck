<template>
  <div class="radio" :disabled="disabled">
    <div class="check" :class='{disabled, checked}' @click="clickHandle"><div class="dot" v-show="checked"></div></div>
    <div class="title">
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    selected: Boolean,
    disabled: Boolean,
    title:String
  },
  data(){
    return {
      checked:false
    }
  },
  methods:{
    clickHandle(){
      if (!this.disabled ){
        this.checked=!this.checked;
        this.$emit('checked', this.checked)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$--rad-normal: rgb(219,223,240);
  $--rad-hover: rgb(6, 152, 219);
  $--rad-selected: rgb(6, 152, 219);
  $--rad-disabled:  rgb(237,238,239);
.radio{
  display: flex;
  position: relative;
  justify-content: stretch;
  align-items:center;
  &:hover {
    & > .check{
      border: 1px solid $--rad-hover;
    }
    & > .title{
      color: $--rad-hover;
    }
    &  .dot{
      background-color: $--rad-hover;
      border: 1px solid $--rad-hover;
    }
  }
}
.radio[disabled]{
  & .title{
    color:$--rad-disabled;
  }
  & .dot{
    background-color: $--rad-disabled;
    border: 1px solid $--rad-disabled;
  }
  & .check{
      border: 1px solid $--rad-disabled;
      background-color: $--rad-disabled;
    }
  
  &:hover{
    & .dot{
      background-color: $--rad-disabled;
      border: 1px solid $--rad-disabled;
    }
    & .check{
      border: 1px solid $--rad-disabled;
    }
  }
}
.check{
  height: 20px;
  width: 20px;

  border-radius: 50%;
  border: 1px solid $--rad-normal;
  &.checked:not(.disabled){
    border: 1px solid $--rad-selected;
    & .dot{
      background-color: $--rad-selected;
      border: 1px solid $--rad-selected;
    }
  }
}
.dot{
   position: relative;
  top: 50%;
  left: 50%;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  border: 1px solid $--rad-normal;
  transform: translate(-50%, -50%);
  background-color: $--rad-normal;
  // opacity: 0;
}
.title{
  margin-left: 0.5rem;
}



</style>
