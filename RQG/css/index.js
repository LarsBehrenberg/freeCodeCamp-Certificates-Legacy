var rndQuote = [{quote:"Most of our pocket wisdom is conceived for the use of mediocre people, to discourage them from ambitious attempts, and generally console them in their mediocrity.",author:"Robert Louis Stevenson",},{quote:"Poorer students take out larger loans and will have to contribute more to the cost of higher education.",author:"Anne Campbell",},{quote:"I think it's harder for people than it should be. But as more and more of us become carbon neutral and change the patterns in our lives to be part of the solution instead of part of the problem, we are now beginning to see the changes in policy that are needed.",author:"Al Gore",},{quote:"I am someone who hopes for the best and prepares for the worst.",author:"Hillary Clinton",},{quote:"That first year at Universal was a big blur and, naturally, I thought they were wasting me. I didn't realize at the time that I was learning my craft and acting more easily in front of the camera.", author:"Kent McCord"}]
//Button.onclick

var lastNumber = 0;

document.getElementById("newQuote").onclick = function() {myFunction()};
function myFunction() {
  var rndNumber = Math.floor(Math.random() * 3) + 0;
  if(rndNumber != lastNumber){
          document.getElementById("quotes").innerHTML = rndQuote[rndNumber].author+ " says: " + rndQuote[rndNumber].quote;
          lastNumber = rndNumber;
      }else{
          myFunction();
      }



  }
