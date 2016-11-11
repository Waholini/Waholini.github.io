var canvas = document.getElementById('F.Canvas');
var ctx = canvas.getContext('2d');

for (var i = 0; i < 80; i += 1) {
    ctx.rect(0, 0, i*3, i*3);
    ctx.stroke();
}