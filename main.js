function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 64, lng: 26},
  });
   
   // Load the train GeoJSON onto the map.
  map.data.loadGeoJson('https://rata.digitraffic.fi/api/v1/train-locations.geojson/latest', {idPropertyName: 'trainNumber'});
  
  var trainicon = {
    url: 'train.png',
};
map.data.setStyle({
    icon: trainicon,
	});

  
  const apiKey = 'AIzaSyBty_Ly3P5yJTnroKVUU7QHiocHKmbsonA';
  const infoWindow = new google.maps.InfoWindow();
  
  map.data.addListener('click', (event) => {
    const trainNumber = event.feature.getProperty('trainNumber');
    const departureDate = event.feature.getProperty('departureDate');
    const speed = event.feature.getProperty('speed');
    const position = event.feature.getGeometry().get();
    const content = `
      <h2><b>Train number:</b> ${trainNumber}</h2><p><b>Departure date:</b> ${departureDate}</p>
      <p><b>Speed:</b> ${speed}<br/>
    `;


infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
}

window.onload = function() {
    var audio =document.getElementById("easteregg");
    audio.volume=0.1;
}

 