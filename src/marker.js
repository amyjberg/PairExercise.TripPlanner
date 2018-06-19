const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const markerFactory = (type, coordinates) => {
  const markerDomElem = document.createElement('div');
  markerDomElem.style.width = '32px';
  markerDomElem.style.height = '39px';
  if(!iconURLs.hasOwnProperty(type)) type = 'activities';
  // markerDomElem.style.backgroundImage = `url(${iconURLs[type]})`;
  // markerDomElem.style.backgroundSize = 'contain';

  // if(type.toLowerCase() === 'activity') {

    markerDomElem.style.backgroundImage = "url (http://i.imgur.com/WbMOfMl.png)";
    // console.log('activity test', markerDomElem.style.backgroundImage);
  // }
  // else if (type.toLowerCase() === 'hotel'){
  //   markerDomElem.style.backgroundImage = 'url (http://i.imgur.com/D9574Cu.png)'
  // }
  // else if (type.toLowerCase() === 'restaurant'){
  //   markerDomElem.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)'
  // }
  console.log("Bottom Console Log", markerDomElem.style);
  return new mapboxgl.Marker(markerDomElem).setLngLat(coordinates);

}



module.exports = markerFactory;
