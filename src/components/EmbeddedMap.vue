<script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import markerimg from "../assets/nail-img-3.jpg";

  export default defineComponent({
  setup() {
    const initializeMap = async () => {
      const mapElement = document.getElementById('map') as HTMLElement;
      const map = new google.maps.Map(mapElement, {
        center: { lat: 40.7784935, lng: -73.9809166 },
        zoom: 15,
        mapId: 'YOUR_MAP_ID'
      });

      const nailbyyoung = document.createElement('img');
      nailbyyoung.src = markerimg;
      nailbyyoung.style.width = '40px';
      nailbyyoung.style.height = '40px';
      nailbyyoung.style.objectFit = 'cover';
      nailbyyoung.style.borderRadius = '50%';

      const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      const glyphSvgPinElement = new PinElement({
        glyph: nailbyyoung,
        background: '#FFFFFF',
        borderColor: '#000000',
        scale: 2
      });

      new AdvancedMarkerElement({
        map,
        position: { lat: 40.7784935, lng: -73.9809166 },
        content: glyphSvgPinElement.element,
        title: 'Nail by young marker image',
      });
    };

    onMounted(() => {
      initializeMap();
    });
  },
});
</script>

<template>
  <div id="map"></div>
</template>

<style>
#map {
  width: 30vw;
  padding-bottom: 30%;
  margin: auto;
  }

  #map {
    width: 100%;
    height: 50vh;
    }
</style>
