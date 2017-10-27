var rndQuote = {name:"bob", quote:"'Nothing'"};

//Button.onclick
document.getElementById("newQuote").onclick = function() {myFunction()};
function myFunction() {
 document.getElementById("quotes").innerHTML = rndQuote.name+ " says: " + rndQuote.quote;
  }
