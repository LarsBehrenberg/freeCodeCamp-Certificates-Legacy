//Get position while loading window
window.onload = function(){
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
          navigator.geolocation.getCurrentPosition(myMap);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
}

//Displays coordinates in text
function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

//Creates Map and centers map on your location
function myMap(position) {
var mapProp= {
    center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
    zoom:10,
    mapTypeId: google.maps.MapTypeId.SATELLITE
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

//Call API
var xhttp = new XMLHttpRequest();
var serverResponse = "";
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read;
       serverResponse = xhttp.responseText;
       document.getElementById("testid").innerHTML = serverResponse;
    }
};
xhttp.open("GET","https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139", true);
xhttp.send();
