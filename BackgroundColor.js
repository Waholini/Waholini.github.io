var farge = prompt("Hvilken farge liker du best?")
switch(farge){
    case"Blå":
     document.write("Blå lo")
     document.body.style.background ="blue"
     break;
    case"Grønn":
     document.write("Grønn lo")
     document.body.style.background ="green"
     break;
    case"Gul":
     document.write("Gul lo")
     document.body.style.background ="yellow"
     break;
    default:
     document.write(farge + " l")
     document.body.style.background = farge;
}

var i = 0;
while(i<10){
    document.write(i);
    i = i+1;
}