<template>
  <div class="wrap">
    <div class="list">
      <slot></slot>
    </div>
    <yandex-map
      :settings="settings"
      :coords="selectedPoint.coords"
      :zoom="11"
      style="width: 100%; height: 100%"
      :scroll-zoom="false"
    >
      <ymap-marker
        v-for="radio in radios"
        :key="radio.name"
        :coords="radio.coords"
        marker-id="1"
        :hint-content="radio.adr"
        :icon="choise === radio.adr ? markerIcon.select : markerIcon.unselect"
      />
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  name: "Map",
  props: { choise: String },
  components: { yandexMap, ymapMarker },
  data() {
    return {
      settings: {
        apiKey: "9b27ecf5-fac6-419d-b8f5-184a9818db91",
        lang: "ru_RU",
        coordorder: "latlong",
        version: "2.1",
      },
      coords: [
        {
          adr: "",
          coords: [0, 0],
        },
        {
          adr: "",
          coords: [0, 0],
        },
      ],
      markerIcon: {
        unselect: {
          layout: "default#imageWithContent",
          imageHref: "klipartz.com.png",
          imageSize: [43, 43],
          imageOffset: [0, 0],
          content: "",
          contentOffset: [10, 15],
          contentLayout:
            '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
        },
        select: {
          layout: "default#imageWithContent",
          imageHref: "klipartz.select.png",
          imageSize: [43, 43],
          imageOffset: [0, 0],
          content: "",
          contentOffset: [10, 15],
          contentLayout:
            '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
        },
      },
      radios: [
        {
          adr: "First",
          coords: [0, 0],
        },
        {
          adr: "Second",
          coords: [0, 0],
        },
      ],
    };
  },
  computed: {
    averangeCoords() {
      return [
        this.coords[0].coords[0] +
          (this.coords[1].coords[0] - this.coords[0].coords[0]) / 2,
        this.coords[0].coords[1] +
          (this.coords[1].coords[1] - this.coords[0].coords[1]) / 2,
      ];
    },
    selectedPoint() {
      return this.radios.find((point) => point.adr === this.choise);
    },
  },
  mounted() {
    this.radios = this.$children;
    this.radios.pop(); //  кастыль, не знаю откуда берется последний child
    console.log(this.radios.map((e) => e.coords));
  },
  updated() {
    console.log(
      this.choise,
      this.radios.map((e) => e.adr)
    );
  },
};
</script>
<style lang="scss" scoped>
@import "Map";
</style>



