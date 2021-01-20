<template>
  <div id="app">
    <Input title="title" placeholder="Placeholder" @change="onChange($event)" errorMessage="error"/>
    <Button >Button pressed</Button>
    <Radio title="Radio button" @checked="checked($event)" :disabled="true"/>
    <Tabs>
      <Tab name="Tab 1">
        <div>What we do</div>
      </Tab>
      <Tab name="Tab 2">
        <div>How much we do it for</div>
      </Tab>
      <Tab name="Tab 3">
        <div>Lorem ipsum</div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Radio from './components/Radio.vue';
import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';
import Input from './components/Input.vue';


export default {
  name: 'App',
  components: {
    Input, Button, Radio, Tabs, Tab
  },
  data:()=>{
    return {
      text:''
    }
  },
  methods:{
    onChange(event){
      console.log(event)
      this.text=event;
    },
    checked(event){
      console.log(event)
    }
  }
}
</script>

<style lang="scss">
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
  --tabs-current-bg: white;
  --tabs-passive-bg:  rgb(237,238,239);
  --tab-active-clr:rgb(0,150,218);
  

}
#app {
 font-family: Montserrat, Arial, Helvetica, sans-serif;
 box-sizing: border-box;
 font-size: 14px;
}

</style>
