
//if (answer) { 
  //  var nameDiv = document.getElementById("navn");
//
  //  nameDiv.innerHTML = "Ditt navn er <b>" + answer + "</b>.";
    
//}

var goldenElm = document.getElementById("GoldenWah");

    goldenElm.innerHTML =("I exist.");

var Wahpicture = document.getElementById("Wahpicture");

var WahlooElm = document.getElementById("Wahloo");
var WahlooigiElm = document.getElementById("Wahlooigi");




setTimeout(function () {
     Wahpicture.src = "angrycat.png"
     WahlooElm.innerHTML = WahlooigiElm.innerHTML;
}, 3000);

var visitorCounter = 3;
var visitorElement = document.getElementById("Visitors");

setInterval(function () {
   visitorCounter += 1;
   visitorElement.innerText = visitorCounter + "Visitors";
}, 3000)



