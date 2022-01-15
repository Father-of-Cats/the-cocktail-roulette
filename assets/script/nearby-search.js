// Map variables
let pos;
let map;
let bounds;
let infoWindow;
let currentInfoWindow;
let service;
let infoPane;

function initMap() {
  // Initialise variables and Geolocate user
  bounds = new google.maps.LatLngBounds();
	infoWindow = new google.maps.InfoWindow;
	currentInfoWindow = infoWindow;

	// Try HTML5 geolocation
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map = new google.maps.Map(document.getElementById('map'), {
				center: pos,
				zoom: 15
			});
			bounds.extend(pos);

			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			infoWindow.open(map);
			map.setCenter(pos);

		}, () => {
			// Browser supports geolocation but user denies permission
			handleLocationError(true, infoWindow);
		});
	} else {
		// Browser does not support geolocation
		handleLocationError(false, infoWindow);
	}
}

// Handle Geolocation error
function handleLocationError(browserHasGeolocation, infoWindow) {
	// Default to most desolate place on Earth
	pos = {lat: -37.116185, lng: -12.3540164};
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 12
  });

	// Display an InfoWindow at map center
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Geolocation permissions denied. Using default location.' :
		'Error: Your browser does not support geolocation.');
	infoWindow.open(map);
	currentInfoWindow = infoWindow;

}
