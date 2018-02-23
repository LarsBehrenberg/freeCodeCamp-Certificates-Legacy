window.onload = function(){

    // $.get("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139", function(data){
    //     console.log(data);
    // });

    var http = new XMLHttpRequest;

    http.onreadystatechange = function(){
        if (http.status == 200 && http.readyState == 4) {
            console.log(JSON.parse(http.response))
        }
    }

    http.open("GET","http://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&titles=Main%20Page&rvprop=content", true);
    http.send();
};

