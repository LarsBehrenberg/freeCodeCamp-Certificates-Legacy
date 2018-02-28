var twitchChannels = [
    "zentenlol",
    "ESL_SC2",
    "freecodecamp"
];

var endpoint_ch = "https://wind-bow.gomix.me/twitch-api/channels/";
var endpoint_st = "https://wind-bow.gomix.me/twitch-api/streams/";
    
window.onload = function(){

    for (var x = 0; x < twitchChannels.length ; x++) {
        $.getJSON(endpoint_ch + twitchChannels[x] + "?callback=?", function(data){
            
           // twitchChannels[x] = data.description;
            
            
            console.log(twitchChannels);
            // console.log(data);
            // var streamTitle = document.createElement("div");
            // streamTitle.setAttribute("class", "ptitle");

            // var streamDescription = document.createElement("div");
            // streamDescription.setAttribute("class", "pdescription");

            // var channelDiv = document.getElementById("channelName");
            // channelDiv.appendChild(streamTitle);
            // channelDiv.appendChild(streamDescription);
            // streamTitle.innerHTML = data.display_name;
            // streamDescription.innerHTML = data.status;
        });
    }

} //end of window.onload

function myFunction() {
    document.getElementById("list").style.color = "red";
}

// $.getJSON("zentenlol?callback=?", function(data){
//     console.log(data);
// });