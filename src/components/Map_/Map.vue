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
      normolize: this.normolizeScale(),
    };
  },
  methods: {
    async initializeYandexMap() {
      this.myMap = new window.ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 15,
        controls: ["geolocationControl", "zoomControl"],
      });
      this.myMap.behaviors.disable("scrollZoom");
      this.radios = this.$children.map((e) => ({ name: e.name, adr: e.adr }));
      await Promise.all(
        this.radios.map(async (e) => {
          const coords = await this.setCoords(e);
          const geoObj = this.setGeoObject(coords);
          this.myMap.geoObjects.add(geoObj);
          e.coords = coords;
          e.geoObj = geoObj;
        })
      );
    },
    setGeoObject(coords) {
      return new window.ymaps.GeoObject(
        {
          geometry: {
            type: "Point",
            coordinates: coords,
          },
        },
        {
          draggable: false,
          iconLayout: "default#image",
          iconImageHref: "klipartz.com.png",
          iconImageSize: [40, 40],
        }
      );
    },
    mountMap() {
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
      let done = false;
      return () => {
        if (!done) {
          done = true;
          this.myMap.setBounds(this.myMap.geoObjects.getBounds(), {
            checkZoomRange: true,
            zoomMargin: 9,
          });
          return;
        }
        return;
      };
    },
  },
  mounted() {
    this.mountMap();
  },
  updated() {
    console.log("this.activeTab", this.activeTab);
    if (this.activeTab === "Самовывоз") {
      setTimeout(() => {
        this.normolize();
      }, 200);

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
        this.myMap.panTo(this.radios[index].coords);
      }, 300);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "Map";
</style>
