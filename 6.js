var canvas = document.getElementById('Canvas6');
var ctx = canvas.getContext("2d");

var x = 200

var y = 100

ctx.lineWidth = 3;

function makeCircle () {
    ctx.beginPath();
    ctx.arc(x,y,50,0,2*Math.PI);
    ctx.stroke();
}

function rightX () {
    x = x + 30;
}

function leftX () {
    x = x - 50;
}

function upY () {
    y = y - 50;
}

function downY () {
    y = y + 50;
}

ctx.strokeStyle="blue";
makeCircle();

ctx.strokeStyle="yellow";
rightX();
rightX();
downY();
makeCircle();

ctx.strokeStyle="black";
rightX();
rightX();
upY();
makeCircle();

ctx.strokeStyle="green";
rightX();
rightX();
downY();
makeCircle();

ctx.strokeStyle="red";
rightX();
rightX();
upY();
makeCircle();