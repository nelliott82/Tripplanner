const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoibmVsbGlvdHQ4MiIsImEiOiJjazE2bGhwYTYxNzQ1M2NueG85ZHZtZzd2In0.jdie9smRejczk0XtLYry_A';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6390, 41.8955], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});


const marker = buildMarker('activities', [-87.6390, 41.8955]);

marker.addTo(map);
