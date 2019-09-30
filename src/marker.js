const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'hotelMrkr.png',
  restaurants: 'restaurantMrkr.png',
  activities: 'activityMrkr.png',
};

const buildMarker = function(type, coords) {
  const imageURL = iconURLs[type];
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${imageURL})`;
  console.log("TCL: buildMarker -> markerDomEl", markerDomEl)
  
  return new mapbox.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
