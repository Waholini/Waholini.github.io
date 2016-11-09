var canvas = document.getElementById('E.Canvas');
var ctx = canvas.getContext('2d');

var side = 150;
var xPosisjon =0;
var yPosisjon =0;

while(side>0) {
    ctx.rect(xPosisjon, yPosisjon, side, side);
    ctx.stroke();
    xPosisjon = xPosisjon+10;
    yPosisjon = yPosisjon+10;
    side = side-20
}