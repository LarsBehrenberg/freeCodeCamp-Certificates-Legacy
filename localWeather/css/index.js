var x;
var y;
//Get position while loading window
window.onload = function(){
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  function showPosition(position) {
      document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
       x = position.coords.latitude;
       y = position.coords.longitude;

  }

}

function showMap(){
  function myMap(position) {
    var mapProp= {
        center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
        zoom:10,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    document.getElementById("test").innerHTML = "yes";
}
