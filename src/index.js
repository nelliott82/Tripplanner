const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoibmVsbGlvdHQ4MiIsImEiOiJjazE2bGhwYTYxNzQ1M2NueG85ZHZtZzd2In0.jdie9smRejczk0XtLYry_A';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const mapElement = document.createElement('div');
mapElement.style.width = '32px';
mapElement.style.width = '39px';
mapElement.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(mapElement).setLngLat([-87.6354, 41.8885]).addTo(map);
