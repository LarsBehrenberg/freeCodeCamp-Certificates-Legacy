var twitchChannels = [
    "Doublelift",
    "eisohnewaffel",
    "riotgamesjp",
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
];

window.onload = loadingTwitch();

function loadingTwitch(){
    for(let x = 0; x < twitchChannels.length; x++){
        $.ajax({
            type: "GET",
            url: "https://wind-bow.gomix.me/twitch-api/channels/" + twitchChannels[x] + "?callback=?",
            async: false,
            dataType: "JSON",
            success: function(data){
                var newRow = document.createElement("div");
                newRow.setAttribute("class", "row");
                newRow.style.display = "flex";
                document.getElementById("loading").appendChild(newRow);


                var newDivLeft = document.createElement("div");                                
                newDivLeft.setAttribute("class", "col-2");
                newRow.appendChild(newDivLeft);
                newDivLeft.innerHTML = "<img class='icon' src='" + data.logo + "'>";

                var newDivMiddle = document.createElement("div");                               
                newDivMiddle.setAttribute("class", "col-8");
                newRow.appendChild(newDivMiddle);
                newDivMiddle.innerHTML = "<strong><a target='#' href='" + data.url + "'>" + data.display_name + "</a></strong><br>" + data.status;

                var newDivRight = document.createElement("div");
                newDivRight.setAttribute("class", "col-2");
                newDivRight.setAttribute("id", x)
                newRow.appendChild(newDivRight);

                $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + twitchChannels[x] + "?callback=?", function(data){
                    if(data.stream == null){
                        document.getElementById(x).innerHTML = "<img src='https://cdn2.iconfinder.com/data/icons/wifi-4/100/wifi3-512.png' class='onlinestatus'> ";
                        document.getElementById(x).parentElement.classList.add("offline");
                    }
                    else{
                        document.getElementById(x).innerHTML = "<img src='https://cdn2.iconfinder.com/data/icons/wifi-4/100/wifi-512.png' class='onlinestatus'> ";
                        document.getElementById(x).parentElement.classList.add("online");
                    }
                });
            },
            error: function(jxQR, data, error){
                console.log(error);
            }
        });
    };
};

function allDisplay() {
    $(".offline").show();
    $(".online").show();
}

function onlineDisplay() {
    $(".offline").hide();
    $(".online").show();
}

function offlineDisplay() {
    $(".offline").show();
    $(".online").hide();
}