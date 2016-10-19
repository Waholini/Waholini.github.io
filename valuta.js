
 var nokElement = document.getElementById("nok");

nokElement.oninput = function () {
    var nok = parseFloat(nokElement.value);

    if (nok < 0) {
        nok = 0;
    }

    if (isNaN(nok)) {
        nok = 0;
    }


      var dkk = nok /1.246726 ;
      var sek = nok /0.975106774 ;
      var usd = nok /8.32549349 ;

      var outputElement = document.getElementById("output");
      
      outputElement.innerHTML = nok.toFixed(2) + " NOK in USD is " + usd.toFixed(2);
      outputElement.innerHTML += "<br>";
      
      outputElement.innerHTML += nok.toFixed(2) + " NOK in DKK is " + dkk.toFixed(2);
      outputElement.innerHTML += "<br>";
      
      outputElement.innerHTML += nok.toFixed(2) + " NOK in SEK is " + sek.toFixed(2);
      outputElement.innerHTML += "<br>";

 
}



