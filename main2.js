function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 64, lng: 26},
  });
   
   // Load the train GeoJSON onto the map.
  setInterval(map.data.loadGeoJson('https://rata.digitraffic.fi/api/v1/train-locations.geojson/latest', {idPropertyName: 'trainNumber'}), 15000);
  setInterval(map.data.loadGeoJson('https://rata.digitraffic.fi/api/v1/live-trains', {idPropertyName: 'trainNumber'}), 15000);
  // Set icon and some animation for a train
	var trainicon = {
    url: 'train.png',
};
	map.data.setStyle({
    icon: trainicon,
	animation: google.maps.Animation.DROP,
	});
	const apiKey = 'AIzaSyBty_Ly3P5yJTnroKVUU7QHiocHKmbsonA';
	const infoWindow = new google.maps.InfoWindow();
	map.data.addListener('click', (event) => {
    const trainNumber = event.feature.getProperty('trainNumber');
	const trainType = event.feature.getProperty('trainType');
	const trainCategory = event.feature.getProperty('trainCategory');
    const departureDate = event.feature.getProperty('departureDate');
    const speed = event.feature.getProperty('speed');
    const position = event.feature.getGeometry().get();
    const content = `
      <h2><b>Train number:</b> ${trainType}${trainNumber}</h2><p><b>Train category:</b> ${trainCategory}</p><p><b>Departure date:</b> ${departureDate}</p>
      <p><b>Speed:</b> ${speed} km/h<br/>
    `;


	infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });
}