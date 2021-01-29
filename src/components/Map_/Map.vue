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
    activeTab: String,
    selectPoint: String,
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
      console.log(this.radios);
      await Promise.all(
        this.radios.map(async (e) => {
          const coords = await this.setCoords(e);
          const geoObj = this.setGeoObject(coords);
          this.myMap.geoObjects.add(geoObj);
          e.coords = coords;
          e.geoObj = geoObj;
        })
      );
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
          // preset: "islands#blackStretchyIcon",
          // Метку можно перемещать.
          draggable: false,
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "klipartz.com.png",
          // Размеры метки.
          iconImageSize: [40, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          // iconImageOffset: [-5, -38]
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
    async setCoords({ adr }) {
      try {
        const myGeocoder = window.ymaps.geocode(adr);
        const res = await myGeocoder;
        return res.geoObjects.get(0).geometry._coordinates.slice(0, 2);
      } catch (error) {
        throw Error(error);
      }
    },
    normolizeScale() {
      const q = window.ymaps.geoQuery(this.myMap.geoObjects);

      while (
        q.searchIntersect(this.myMap).getLength() < this.radios.length &&
        this.myMap.getZoom() >= 1
      ) {
        console.log(
          this.myMap.getZoom(),
          q.searchIntersect(this.myMap).getLength()
        );

        this.myMap.setZoom(this.myMap.getZoom() - 1);
      }
    },
  },
  mounted() {
    this.mountMap();
  },
  updated() {
    console.log("updated");
    if (this.activeTab === "Самовывоз") {
      this.normolizeScale();
      setTimeout(() => {
        const index = this.radios.findIndex(
          (e) => ~e.adr.search(this.selectPoint)
        );

        this.radios.forEach((e, i) => {
          if (i === index) {
            this.radios[i].geoObj.options.set(
              "iconImageHref",
              "klipartz.select.png"
            );
          } else {
            this.radios[i].geoObj.options.set(
              "iconImageHref",
              "klipartz.com.png"
            );
          }
        });
        this.myMap.setCenter(this.radios[index].coords);
        // this.myMap.setZoom(14);
      }, 200);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "Map";
</style>
