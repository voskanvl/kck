<template>
  <div class="button" :class="{disabled}">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    disabled:Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.button{
  max-width: 207px;
  // height: 56px;
  display: flex;
  padding: 1rem 0;
  justify-content: stretch;
  align-items: center;
  margin-bottom: 1.5rem;
  border-radius: 30px;
  background-color: var(--btn-normal-bg);
  color:var(--btn-clr);
  cursor: pointer;
  &:hover{
    background-color: var(--btn-hover-bg);
  }
  &:active{
    background-color: var(--btn-pressed-bg);
  }
  &.disabled{
    background-color: var(--btn-disabled-bg);
    color: var( --btn-disabled-clr);
  }

  &>div{
    width: 100%;
    text-align: center;
  }
}

</style>
