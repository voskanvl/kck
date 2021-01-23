<template>
  <div class="wrap">
    <div class="list">
      <slot></slot>
    </div>
    <yandex-map
      :settings="settings"
      :coords="selectedPoint()"
      :zoom="11"
      style="width: 100%; height: 100%"
      :scroll-zoom="false"
    >
      <ymap-marker
        v-for="(radio, idx) in radios"
        :key="radio.name"
        :coords="radio.coords"
        :marker-id="idx"
        :hint-content="radio.adr"
        :icon="selectedIcon(radio)"
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
          layout: "default#image",
          imageHref: "klipartz.com.png",
          imageSize: [43, 43],
          imageOffset: [0, 0],
        },
        select: {
          layout: "default#image",
          imageHref: "klipartz.select.png",
          imageSize: [43, 43],
          imageOffset: [0, 0],
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
  methods: {
    selectedPoint() {
      return (
        this.radios.find((point) => point.adr === this.choise)?.coords || [
          55.757556,
          37.651592,
        ]
      );
    },
    selectedIcon({ adr }) {
      return this.choise === adr
        ? this.markerIcon.select // на каждый запрос новый объект?!
        : this.markerIcon.unselect;
    },
  },
  computed: {
    averangeCoords() {
      const averangeX =
        this.radios.reduce((acc, radio) => (acc += radio.coords[0]), 0) /
        this.radios.length;
      const averangeY =
        this.radios.reduce((acc, radio) => (acc += radio.coords[1]), 0) /
        this.radios.length;
      return [averangeX, averangeY];
    },
  },
  mounted() {
    this.radios = this.$children;
    this.radios.pop(); //  кастыль, не знаю откуда берется последний child
  },
  updated() {},
};
</script>
<style lang="scss" scoped>
@import "Map";
</style>



