<template>
  <div class="wrap">
    <yandex-map
      :settings="settings"
      :coords="coords[0].coords"
      :zoom="11"
      style="width: 100%; height: 100%"
      :scroll-zoom="false"
    >
      <ymap-marker
        :coords="coords[0].coords"
        marker-id="1"
        :hint-content="coords[0].adr"
        :icon="markerIcon"
      />
      <ymap-marker
        :coords="coords[1].coords"
        marker-id="2"
        :hint-content="coords[1].adr"
        :icon="markerIcon"
      />
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  name: "Map",
  props: {},
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
        layout: "default#imageWithContent",
        imageHref: "klipartz.com.png",
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: "",
        contentOffset: [10, 15],
        contentLayout:
          '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      },
      children: this.$children,
    };
  },
  mounted() {
    console.log(this.children);
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 400px;
}
</style>



