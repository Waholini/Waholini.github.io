var color = document.getElementById("color");

var canvas = document.getElementById("canvas");
        
var ctx = canvas.getContext("2d");
        
ctx.translate(0.5, 0.5);
        
ctx.lineWidth= 1;

var size = 20
var amount = canvas.width / 20 ;
var state = {};

reset(); //Drawing lines at the bottom of the code.


ctx.stroke();

var drawed = {};              
function draw (x, y) {

    x = Math.floor(x);
    y = Math.floor(y);

    var coordinate = x + ',' + y;

    if (drawed[coordinate] === true) {
        delete drawed[coordinate]; 
        ctx.clearRect(x * size + 1, y * size, size - 1, size - 1)
    } else {
        drawed[coordinate] = true; 
        ctx.fillRect(x * size, y * size, size, size)
    }

}

canvas.onclick = function (event) {
    var x = event.offsetX / size;
    var y = event.offsetY / size;

    draw(x, y);
    event.stopPropagation();
}

/*document.body.onclick = function(event) {
 reset();

}*/

function reset () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

for (var i = 0; i < amount; i += 1) {
       ctx.moveTo(i * 20,   0);
       ctx.lineTo(i * 20,   canvas.height);
       ctx.stroke()
       ctx.moveTo(0,  i * 20);
       ctx.lineTo(canvas.width, i * 20)
       ctx.stroke()
 }

        ctx.stroke()
}

color.onchange = function (evt) {
    ctx.fillStyle = evt.target.value;
}
 