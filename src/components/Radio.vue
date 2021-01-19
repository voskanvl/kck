<template>
  <div class="radio">
    <div class="check" :class='{disabled, selected}'><div class="dot"></div></div>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    selected: Boolean,
    disabled: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.radio{
  display: flex;
  position: relative;
  justify-content: stretch;
  align-items:center;
}
.check{
  height: 20px;
  width: 20px;

  border-radius: 50%;
  border: 1px solid var(--rad-normal);
}
.dot{
   position: relative;
  top: 50%;
  left: 50%;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  border: 1px solid var(--rad-normal);
  transform: translate(-50%, -50%);
  background-color: var(--rad-normal);
  opacity: 0;
}
.slot{
  margin-left: 1rem;
  height: 1.5rem;
}
.radio:hover > .check{
  border: 1px solid var(--rad-hover);
}
.radio:hover > .slot{
  color: var(--rad-hover);
}
.radio:hover .check.disabled + .slot{
  color: var(--rad-disabled);
}
.check.selected{
  border: 1px solid var(--rad-hover);
}
.check.selected > .dot{
  background-color: var(--rad-hover);
  border: 1px solid var(--rad-hover);
  opacity: 1;
}
.disabled.check{
  background-color: var(--rad-disabled);
  border: 1px solid var(--rad-disabled);
}
.disabled.check + .slot{
  color:var(--rad-disabled);
}
.disabled.check:hover{
  background-color: var(--rad-disabled);
  border: 1px solid var(--rad-disabled);
}

</style>
