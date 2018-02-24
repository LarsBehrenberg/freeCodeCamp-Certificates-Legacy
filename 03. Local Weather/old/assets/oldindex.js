//Calling API and pushing it to <p>
var xhttp = new XMLHttpRequest();
var serverResponse = "";
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is ready;
       var parsed = JSON.parse(this.responseText);
       console.log(parsed.weather[0].icon)
       document.getElementById("temperature").innerHTML = parsed.main.temp + "°C, " + parsed.weather[0].description;
       document.getElementById("icon").style.backgroundImage = "url("parsed.weather[0].icon")";
    }
};

//Geocoding begins here
var geocoder;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  navigator.geolocation.getCurrentPosition(myMap);
}
//Get the latitude and the longitude;
function successFunction(position) {
  //opening fccAPI
  xhttp.open("GET","https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, true);
  xhttp.send();
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  codeLatLng(lat, lng)
}

//creates errorMessage
function errorFunction(){
  alert("Geocoder failed");
}

// initializing Geocoding
function initialize() {
  geocoder = new google.maps.Geocoder();
}

function codeLatLng(lat, lng) {

  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
    console.log(results)
      if (results[1]) {
       //formatted address
       document.getElementById("demo1").innerHTML = results[0].formatted_address;
       //alert(results[0].formatted_address)
      //find country name
           for (var i=0; i<results[0].address_components.length; i++) {
          for (var b=0;b<results[0].address_components[i].types.length;b++) {

          //there are different types that might hold a city admin_area_lvl_1
          //usually does in come cases looking for sublocality type will be more appropriate
              if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                  //this is the object you are looking for
                  city= results[0].address_components[i];
                  break;
              }
          }
        }
      } else {
        alert("No results found");
        }
      } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

//Creates Map and centers map on your location
function myMap(position) {
var mapProp= {
    center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
    zoom:15,
    //mapTypeId: google.maps.MapTypeId.SATELLITE
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
