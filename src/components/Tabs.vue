<template>
    <div>
        <div class="tabs">
              <ul class="tabs__headerlist">
                <li v-for="(tab,idx) in tabs" :key="'tab'+idx" @click="select(tab)">
                    <span  :class="{perspective:true, 'active': tab.name===active }"></span>
                    <a  >{{ tab.name }}</a>
                </li>
              </ul>
        </div>
        <div class="tabs__details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    props: {
    },
    data() {
        return {tabs: [], active:'' };
    },
    mounted() {
        this.tabs = this.$children;
        this.active=this.tabs[this.tabs.length-1].name;
        // this.$children.forEach(e=>e.selected='false');
        this.tabs[this.tabs.length-1].selected="true";
    },
    methods: {
        select(selectedTab) {
          console.log(selectedTab.name)
          this.active=selectedTab.name;
            this.tabs.forEach(tab => {
                tab.selected = (tab.name === selectedTab.name);
            });
        }
    }
  }

</script>

<style lang="scss" scoped>
 $--tabs-active-bg: white;
 $--tabs-passive-bg:  rgb(237,238,239);
 $--tab-active-clr:rgb(0,150,218);
.tabs__headerlist {
 display: flex;
 flex-direction: row-reverse;
 justify-content: flex-end;
 & a{
   position: relative;
   top: 1rem;
   left: 1rem;
 }
}
.perspective {
  position: absolute;
  height: 40px;
  width: 100px;
  left: -15px;
  background-color: $--tabs-passive-bg;
  transform: rotateX(40deg) rotateZ(0deg);
  border-radius: 5px 5px 0 0;
  z-index: -10;
  box-shadow: 1px 1px 1px #eee;
  &.active {
    z-index: -1;
    background-color: $--tabs-active-bg;
  }
}

li {
  list-style: none;
  perspective: 75px;
  perspective-origin: -15px;
  position: relative;
  margin-right: 3rem;
  cursor: pointer;
  &:hover{
    z-index: 10;
  }
}
.tabs__details{
  position: relative;
  top: 2rem;
  left: 1rem;
  margin: 1rem;
  background-color: #fff;
  z-index: 20;
}

</style>