//Variables for new Quote Button
var rndQuote = rndQuotesJS;
var rndColor = rndColorJS;
var lastNumberQuotes = 0;
var lastNumberColor = 0;

//New Quote Button
document.getElementById("newQuote").onclick = function() {myFunction()};
function myFunction() {
  //Get a randomQuote from quoteArray & randomColor from colorArray
  var rndNumberQuote = Math.floor(Math.random() * rndQuote.length) + 0;
  var rndNumberColor = Math.floor(Math.random() * rndColor.length) + 0;
  //Display Quote and Author and making sure nothing repeats
  if(rndNumberQuote != lastNumberQuotes && rndNumberColor != lastNumberColor){
          document.getElementById("randomQuote").innerHTML = rndQuote[rndNumberQuote].quote;
          document.getElementById("randomAuthor").innerHTML = rndQuote[rndNumberQuote].name;
          lastNumberQuotes = rndNumberQuote;
          lastNumberColor = rndNumberColor;
          //Setting randomBackgroundColor & Button Color
          document.getElementById("newTwitter").style.backgroundColor = rndColor[rndNumberColor];
          document.getElementById("newQuote").style.backgroundColor = rndColor[rndNumberColor];
          document.body.style.backgroundColor = rndColor[rndNumberColor];
      }else{
          myFunction();
      }

  }
//Twitter Button
document.getElementById("newTwitter").onclick = function() {twitter()};
function twitter(){
  var twitterquote = document.getElementById("randomQuote").innerHTML;
  var twitterauthor =  document.getElementById("randomAuthor").innerHTML;
  if (twitterauthor.length != 0){
    var tweetUrl = 'https://twitter.com/intent/tweet?text="' + encodeURIComponent(twitterquote) + '"' + encodeURIComponent(" - " + twitterauthor);
    window.open(tweetUrl);
  }
    else{
      var tweetUrl = 'https://twitter.com/intent/tweet?text=' + 'This RandomQuoteGenerator is way cool!';
      window.open(tweetUrl);
    }
}
