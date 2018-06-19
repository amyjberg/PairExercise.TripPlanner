const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');



mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvc2hhbmExMjMiLCJhIjoiY2ppbTQ4NW8wMDA2czNwcGhrNDlvZHRwaCJ9.Jnqcb3Ev0Thb2lNP53NX8w';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker = buildMarker('activities',[-74.009151, 40.705086])
console.log(marker);
marker.addTo(map);


// const mapboxgl = require("mapbox-gl");

// mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvc2hhbmExMjMiLCJhIjoiY2ppbTQ4NW8wMDA2czNwcGhrNDlvZHRwaCJ9.Jnqcb3Ev0Thb2lNP53NX8w';
// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
// });

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
