
function initMap() {
// Function  to create the map.
	const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 64, lng: 26},
  });
 

// Load the train GeoJSON onto the map.
$.getJSON('https://rata.digitraffic.fi/api/v1/train-locations.geojson/latest',function (data)) {
	features = map.data.addGeoJson(data);
  google.maps.event.addDomListener(document.getElementById('map'), 'load', setInterval(function () {
	map.data.setStyle({
    icon: trainicon,
	animation: google.maps.Animation.DROP,
	});
// Create infowindow for each train marker when you click in it
	const apiKey = 'AIzaSyBty_Ly3P5yJTnroKVUU7QHiocHKmbsonA';
	const infoWindow = new google.maps.InfoWindow();
  
	map.data.addListener('click', (event) => {
// Get data for infowindow
	const trainNumber = event.feature.getProperty('trainNumber');
    const departureDate = event.feature.getProperty('departureDate');
    const speed = event.feature.getProperty('speed');
    const position = event.feature.getGeometry().get();
// Spacify data infowindow formation
	const content = `
      <h2><b>Train:</b> ${trainNumber}</h2><p><b>Departure date:</b> ${departureDate}</p>
      <p><b>Speed:</b> ${speed} km/h<br/>
    `;
// Set data at infowindow
	infoWindow.setContent(content);
// Show infowindow at aprropriate place(where train location is)
	infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
	
  });
});

 
}
  
};


 