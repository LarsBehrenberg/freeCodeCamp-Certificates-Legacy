var x = 0;
var y = 0;
//Get position while loading window
window.onload = function(){
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, myMap);

      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
}


function showPosition(position) {
    document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(1,-2),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
