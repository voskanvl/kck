<template>
  <div class="wrap">
    <yandex-map
      :settings="settings"
      :coords="coords"
      :zoom="10"
      style="width: 100%; height: 100%"
      :icon="markerIcon"
    >
      <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
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
      coords: [54.82896654088406, 39.831893822753904],
      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: "https://image.flaticon.com/icons/png/512/33/33447.png",
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: "123 v12",
        contentOffset: [0, 15],
        contentLayout:
          '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      },
    };
  },
  mounted() {
    // const myMap = new ymaps.Map("map", {
    //   // Координаты центра карты.
    //   // Порядок по умолчанию: «широта, долгота».
    //   // Чтобы не определять координаты центра карты вручную,
    //   // воспользуйтесь инструментом Определение координат.
    //   center: [55.76, 37.64],
    //   // Уровень масштабирования. Допустимые значения:
    //   // от 0 (весь мир) до 19.
    //   zoom: 7,
    // });
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 400px;
}
</style>



