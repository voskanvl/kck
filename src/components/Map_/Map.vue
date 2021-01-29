<template>
  <div class="wrap">
    <div class="list">
      <slot></slot>
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    choise: String,
  },
  data() {
    return {
      apiKey: "9b27ecf5-fac6-419d-b8f5-184a9818db91",
      myMap: {},
    };
  },
  methods: {
    initializeYandexMap() {
      this.myMap = new window.ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 15,
        controls: ["geolocationControl", "zoomControl"],
      });
    },
    mountMap() {
      console.log("mounted");
      // Установливаем скрипты для использования яндекс карты
      let scriptYandexMap = document.createElement("script");
      scriptYandexMap.setAttribute(
        "src",
        `https://api-maps.yandex.ru/2.1/?apikey=${this.apiKey}&lang=ru_RU`
      );
      document.body.appendChild(scriptYandexMap);

      // Инициализируем яндекс карту
      scriptYandexMap.addEventListener("load", () =>
        window.ymaps.ready(this.initializeYandexMap)
      );
    },
  },
  mounted() {
    this.mountMap();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "Map";
</style>
