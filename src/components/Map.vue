<template>
  <yandex-map
    :settings="settings"
    :coords="coords"
    :zoom="10"
    style="width: 100%; height: 100%"
  >
    <ymap-marker :coords="coords" marker-id="123" hint-content="some hint" />
  </yandex-map>
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
        apiKey: "68803c60-89f0-48f9-a7a4-b9bb329ecc85",
        lang: "ru_RU",
        coordorder: "latlong",
        version: "2.1",
      },
      coords: [54.82896654088406, 39.831893822753904],
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
</style>



