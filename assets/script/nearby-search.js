// Initialise map
let pos;
let map;

function initMap() {
  // Set default location and initailise variables
  pos = { lat: -33.857, lng: 151.213 };
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 15
  });
}

