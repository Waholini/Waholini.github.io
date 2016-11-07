
var canvas = document.getElementById('W.Canvas');
var ctx = canvas.getContext('2d');

var i = 0

while (i < 40) {
    ctx.rect(0, 0, i*10, i*10);
    ctx.stroke();
    i += 1;

}