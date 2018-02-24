var temperatureNum;

//Stuff that happens when loading the site
window.onload = function(){

    //GeoCoding from here on
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
    }
    
    //Showing coordinates in a <p> element
    function showPosition(position) {
    
        //Defining latitude and longitute for putting in the API link
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        //Declaring variable for XMLHttpRequest
        var xml = new XMLHttpRequest;

            //When Request ready then do this
            xml.onreadystatechange = function(){
        
                //If request completed then do this
                if (xml.readyState == 4 && xml.status == 200){
            
                    //Giving the different information to the elements
                    var parsed = JSON.parse(xml.responseText);
                    console.log(parsed);
                    document.getElementById("location").innerHTML = parsed.name;
                    document.getElementById("temperature").innerHTML = parsed.main.temp + "°C";
                    document.getElementById("sky").innerHTML = parsed.weather[0].main;
                    document.getElementById("icon").innerHTML = "<img src='" + parsed.weather[0].icon + "'>";
                    document.getElementById("author").innerHTML = "Designed by ラース";
                    document.getElementById("buttondiv").innerHTML = "<button onclick='button()'id='button'>Celsius/Fahrenheit</button>";

                    //Declaring the temp as a variable for later use with the button
                    temperatureNum = parsed.main.temp;
                }   
            }      
                //Request to the API
                xml.open("GET","https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long, true);
                xml.send();

                
    }
    getLocation();  //Executing getLocation()
}   //End of window.onload = function();

//Celsius / Fahrenheit Button Switch
var switchbutton = 0;

function button() {
    if(switchbutton == 0){
        var fahrenheit = (temperatureNum*1.8) + 32;
        document.getElementById("temperature").innerHTML = fahrenheit.toFixed(2) + " °F";
        switchbutton = 1;
    }
    else if(switchbutton == 1){
        var celsius = temperatureNum;
        document.getElementById("temperature").innerHTML = celsius.toFixed(2) + " °C";
        switchbutton = 0;
    }
}