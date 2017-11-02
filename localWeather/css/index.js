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

getElementById("test").innerHTML = coord[0];
