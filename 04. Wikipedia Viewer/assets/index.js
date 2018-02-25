
var xhrParsed;
var newDiv;

function searchInput() {
    var searchFieldInput = document.forms["myForm"]["searchField"].value;
    if (searchFieldInput == "") {
        alert("Please type something");
        return false;
    }
    else{
        console.log(searchFieldInput);

        var endpoint = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=" + searchFieldInput;

    var xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function() { //checking everytime request state is changing
       
        if (xhr.readyState == 4 && xhr.status == 200) { //runs when request state is == 4 meaning completed
            xhrParsed = JSON.parse(xhr.response);
            var element = document.getElementById("second");
            

            if(element.querySelectorAll("p").length == 0) {
                for (var x = 0; x < xhrParsed.query.search.length; x++) {
                    newDiv = document.createElement("p"); // Create the div
                    newDiv.setAttribute("id", x);
                    newDiv.setAttribute("class", "result")
    
                    element.appendChild(newDiv);
                    document.getElementById(x).innerHTML = "<a target='_blank' href='https://en.wikipedia.org/?curid=" + xhrParsed.query.search[x].pageid + "'><strong>" + xhrParsed.query.search[x].title + "</strong><br>" + "<br>" + xhrParsed.query.search[x].snippet + "...</a>";   
                }
                    // document.getElementById("entryTitle" + x).innerHTML = xhrParsed.query.search[x].title + "<br>" + "<br>" + xhrParsed.query.search[x].snippet;    
            }
            else{
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }

                for (var x = 0; x < xhrParsed.query.search.length; x++) {
                    newDiv = document.createElement("p"); // Create the div
                    newDiv.setAttribute("id", x);
                    newDiv.setAttribute("class", "result")
    
                    element.appendChild(newDiv);
                    document.getElementById(x).innerHTML = "<a target='_blank' href='https://en.wikipedia.org/?curid=" + xhrParsed.query.search[x].pageid + "'><strong>" + xhrParsed.query.search[x].title + "</strong><br>" + "<br>" + xhrParsed.query.search[x].snippet + "...</a>";   
                }
            }
            
            console.log(xhrParsed);
            console.log(endpoint)
        } // IF Clause
    } //onreadystatechange

    xhr.open("GET",endpoint, true);
    xhr.send();
    }
}