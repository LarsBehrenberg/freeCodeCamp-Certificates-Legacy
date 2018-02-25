
var xhrParsed;
var newDiv;

function searchInput() {
    var searchFieldInput = document.forms["myForm"]["searchField"].value;   // Taking the input from search and set as variable
    if (searchFieldInput == "") {                                           // If Search field is empty, but triggered
        alert("Please type something");                                     // Then giving an alert and return false
        return false;
    }
    else{                                                                   // Otherwise if something is typed in then this triggers

        //API Request Link    
        var endpoint = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch=" + searchFieldInput;

        var xhr = new XMLHttpRequest;

        xhr.onreadystatechange = function() { //checking everytime request state is changing
        
            if (xhr.readyState == 4 && xhr.status == 200) {     // Runs when request state is == 4 meaning completed
                xhrParsed = JSON.parse(xhr.response);           // Parse the API response and setting as variable for later use
                var element = document.getElementById("second");// Setecting div #second and the as variable
                

                if(element.querySelectorAll("p").length == 0) { // This triggers when no search happened before, therefore no p elements exist in #second yet
                    for (var x = 0; x < xhrParsed.query.search.length; x++) {   // goes through the API.length
                        newDiv = document.createElement("p");   // Create the div
                        newDiv.setAttribute("id", x);           // Setting the individual id to the elements
                        newDiv.setAttribute("class", "result")  // Giving the element the result class for designing with CSS
        
                        element.appendChild(newDiv);            // Adding the newDiv to the div #second

                        // Adding the entry title & Snippet to the individual x elements
                        document.getElementById(x).innerHTML = "<a target='_blank' href='https://en.wikipedia.org/?curid=" + xhrParsed.query.search[x].pageid + "'><strong>" + xhrParsed.query.search[x].title + "</strong><br>" + "<br>" + xhrParsed.query.search[x].snippet + "...</a>";   
                    }
                }
                // This triggers when there was a search before so divs need to be deleted first before recreating new ones
                else{ 
                    while (element.firstChild) {                // while div #second still has a child
                        element.removeChild(element.firstChild);// remove this child
                    }

                    for (var x = 0; x < xhrParsed.query.search.length; x++) { //same from here as from line 26
                        newDiv = document.createElement("p");   // Create the div
                        newDiv.setAttribute("id", x);           // Setting the individual id to the elements
                        newDiv.setAttribute("class", "result")  // Giving the element the result class for designing with CSS
        
                        element.appendChild(newDiv);            // Adding the newDiv to the div #second

                        // Adding the entry title & Snippet to the individual x elements
                        document.getElementById(x).innerHTML = "<a target='_blank' href='https://en.wikipedia.org/?curid=" + xhrParsed.query.search[x].pageid + "'><strong>" + xhrParsed.query.search[x].title + "</strong><br>" + "<br>" + xhrParsed.query.search[x].snippet + "...</a>";   
                    }
                }
            } // if readyState && status
        } //onreadystatechange
        xhr.open("GET",endpoint, true);
        xhr.send();
    }
}