var twitchChannels = [];
    
window.onload = function(){
        $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/zentenlol?callback=?", function(data) {
            twitchChannels.push(data.stream);

           $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?", function(data) {
                twitchChannels.push(data.stream);

                $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?", function(data) {
                    twitchChannels.push(data.stream);
                    for(var x = 0; x < twitchChannels.length; x++){
                        console.log(twitchChannels[x].game)
                        
                    }
                });
            });
        });
} //end of window.onload

function myFunction() {
    document.getElementById("list").style.color = "red";
}

// if (data.stream != null) {
//     var newDiv = document.createElement("div");
//     newDiv.setAttribute("id", x);
//     newDiv.setAttribute("class", "result");

//     var channelsDiv = document.getElementById("channels");
//     channelsDiv.appendChild(newDiv);

//     document.getElementById(x).innerHTML = data.stream.channel.status;
//     // console.log(data.stream.channel.status);
// }
// else {
//     console.log("OFFLINE");
// }