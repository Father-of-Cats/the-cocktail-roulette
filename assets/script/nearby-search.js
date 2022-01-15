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

			// Call Places Nearby Search on user's location
			getNearbyPlaces(pos);
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

	// Call Places Nearby Search on the default location
	getNearbyPlaces(pos);
}

// Perform a Places Nearby Search Request
function getNearbyPlaces(position) {
	let request = {
		location: position,
		rankBy: google.maps.places.RankBy.DISTANCE,
		keyword: 'liquor_stores'
	};

	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, nearbyCallback);
}

// Handle Nearby Search results (MAX 20)
function nearbyCallback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
	createMarkers(results);
	}
}

// Generate and set markers at the location of each place result
function createMarkers(places) {
	places.forEach(place => {
		let marker = new google.maps.Marker({
			position: place.geometry.location,
			map: map,
			title: place.name
		});

		// Adjust bounds to include the location of this marker
		bounds.extend(place.geometry.location);
	});

	// After markers are placed adjust bounds to show all markers in the visible area
	map.fitBounds(bounds);
}


