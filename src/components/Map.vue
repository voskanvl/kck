<template>
  <div class="wrap">
    <yandex-map
      :settings="settings"
      :coords="averangeCoords"
      :zoom="11"
      style="width: 100%; height: 100%"
      :scroll-zoom="false"
    >
      <ymap-marker
        :coords="coords[0].coords"
        marker-id="1"
        :hint-content="coords[0].adr"
        :icon="
          choise === coords[0].adr ? markerIcon.select : markerIcon.unselect
        "
      />
      <ymap-marker
        :coords="coords[1].coords"
        marker-id="2"
        :hint-content="coords[1].adr"
        :icon="
          choise === coords[1].adr ? markerIcon.select : markerIcon.unselect
        "
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
          adr: "Песчаная улица, дом 13",
          coords: [55.801131, 37.508167],
        },
        {
          adr: "Подсосенский переулок, 11",
          coords: [55.757556, 37.651592],
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
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 400px;
}
</style>



