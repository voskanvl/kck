<template>
  <div>
            <div class="tabs">
              <ul>
                <li v-for="(tab,idx) in tabs" :key="'tab'+idx" :class="{ 'is-active': tab.isActive }">
                    <a  @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>

            <div class="tabs-details">
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
        return {tabs: [], current:0 };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
  }

</script>

<style lang="scss">

</style>