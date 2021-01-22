<template>
  <div class="wrap">
    <yandex-map
      :settings="settings"
      :coords="coords[0]"
      :zoom="14"
      style="width: 100%; height: 100%"
      :icon="markerIcon"
      :scroll-zoom="false"
    >
      <ymap-marker :coords="coords[1]" marker-id="1" hint-content="some hint" />
      <ymap-marker :coords="coords[0]" marker-id="2" hint-content="some hint" />
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
        [54.82896654088406, 39.831893822753904],
        [54.82496654088406, 39.831893822753904],
      ],
      markerIcon: {
        layout: "default#image",
        imageHref: "src/assets/klipartz.com.png",
        imageSize: [43, 55],
        imageOffset: [-22, -55],
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



