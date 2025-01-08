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
      nailbyyoung.style.width = '50px'; // Set appropriate size
      nailbyyoung.style.height = '50px';
      nailbyyoung.style.objectFit = 'cover';
      nailbyyoung.style.borderRadius = '50%';

      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 40.7784935, lng: -73.9809166 },
        content: nailbyyoung,
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
  }
</style>
