$.getJSON("https://rata.digitraffic.fi/api/v1/train-locations/latest/", 
function(data) {
  console.log(data);
  

 });
    var map;
      function initMap() {
        map = new google.maps.Map(
            document.getElementById('map'),
            {center: new google.maps.LatLng(60.174570, 24.940478), zoom: 7});

        var icons = {
          train: {
            icon: 'train.png'
          }
        };
		
		var audio = document.getElementById("easteregg");
		audio.volume = 0.1;
		  

 };
$.getJSON("https://rata.digitraffic.fi/api/v1/train-locations/latest/", 
function(data) {
    for (var i=0; i < data.length; i++){
	  
	  var features = [
          {
			  
			  position: new google.maps.LatLng(console.log(data[i].location.coordinates.reverse().join(", ")));,
            type: 'train'
          }
		  ];

}
 document.getElementById('map').innerHTML; 
  

 });
		

 
  /*   */


       
          
           /* position: new google.maps.LatLng(61.37539, 29.309512),
            type: 'train'
          }, {
            position: new google.maps.LatLng(62.771929, 22.894744),
            type: 'train'
          }, {
            position: new google.maps.LatLng(60.695715, 26.840868),
            type: 'train'
          }, {
            position: new google.maps.LatLng(60.199636, 24.933804),
            type: 'train'
          }, {
            position: new google.maps.LatLng(60.231038, 24.971722),
            type: 'train'
          }, {
            position: new google.maps.LatLng(63.701013, 25.862825),
            type: 'train'
          }, {
            position: new google.maps.LatLng(64.897086, 28.832998),
            type: 'train'
          }, {
            position: new google.maps.LatLng(60.173351, 24.939891),
            type: 'train'
          }, {
            position: new google.maps.LatLng(61.159343, 28.644932),
            type: 'train'
          }, {
            position: new google.maps.LatLng(61.310683, 22.131629),
            type: 'train'
          }, {
            position: new google.maps.LatLng(61.463864, 23.757763),
            type: 'train'
          }, {
            position: new google.maps.LatLng(62.979897, 25.263258),
            type: 'train'
          }, {
            position: new google.maps.LatLng(62.005455, 24.481707),
            type: 'train'
          }, {
            position: new google.maps.LatLng(60.871207, 26.803074),
            type: 'train'
          }, {
            position: new google.maps.LatLng(60.946373, 27.782227),
            type: 'train'
          }, {
            position: new google.maps.LatLng(64.978933, 25.487888),
            type: 'train'
          }, {
            position: new google.maps.LatLng(60.964872, 25.723385),
            type: 'train'
          }, {
            position: new google.maps.LatLng(61.561487, 27.006211),
            type: 'train'
          }, {
            position: new google.maps.LatLng(66.208089, 25.281632),
            type: 'train'
          }
         */

        // Create markers.
  

 
      /*  for (var i = 0; i < features.length; i++) {
          var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
          });
        };
      } */