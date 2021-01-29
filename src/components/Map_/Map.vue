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
      radios: [],
    };
  },
  methods: {
    async initializeYandexMap() {
      this.myMap = new window.ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 15,
        controls: ["geolocationControl", "zoomControl"],
      });
      this.radios = this.$children.map((e) => ({ name: e.name, adr: e.adr }));
      // await this.setCoords();
      console.log(this.radios);
      const s = this.radios.forEach(async (e) => {
        const coords = await this.setCoords(e);
        console.log(
          "🚀 ~ file: Map.vue ~ line 35 ~ this.radios.forEach ~ coords",
          coords
        );
        this.myMap.geoObjects.add(
          new window.ymaps.Placemark(coords, {}, { preset: "islands#redIcon" })
        );
        return { ...e, coords };
      });
      console.log("🚀 ~ file: Map.vue ~ line 41 ~ s ~ s", s);

      window.RADIO = this.radios;
      window.MY_MAP = this.myMap;
    },
    setGeoObject(coords) {
      return new window.ymaps.GeoObject(
        {
          geometry: {
            type: "Point",
            coordinates: coords,
          },
          properties: {
            // Контент метки.
            iconContent: "Я тащусь",
            hintContent: "Ну давай уже тащи",
          },
        },
        {
          // Опции.
          // Иконка метки будет растягиваться под размер ее содержимого.
          preset: "islands#blackStretchyIcon",
          // Метку можно перемещать.
          draggable: true,
        }
      );
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
    // async setCoords() {
    //   this.radios.forEach(async (e) => {
    //     try {
    //       const myGeocoder = window.ymaps.geocode(e.adr);
    //       const res = await myGeocoder;
    //       e.coords = res.geoObjects.get(0).geometry._coordinates.slice(0, 2);
    //     } catch (error) {
    //       throw Error(error);
    //     }
    //   });
    // },
    async setCoords({ adr }) {
      try {
        const myGeocoder = window.ymaps.geocode(adr);
        const res = await myGeocoder;
        return res.geoObjects.get(0).geometry._coordinates.slice(0, 2);
      } catch (error) {
        throw Error(error);
      }
    },
    addPlacemark() {},
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
