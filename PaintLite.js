var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var Delete = document.getElementById("Delete");
var color = document.getElementById("color");

var mouseIsPressed = false;



canvas.onmousedown = function(evt) {
    ctx.beginPath();
    ctx.moveTo(evt.offsetX, evt.offsetY);
   mouseIsPressed = true;
}

canvas.onmousemove = function(evt) {
    if (mouseIsPressed) {
        ctx.lineTo(evt.offsetX, evt.offsetY);
        ctx.stroke();

    }
}

window.onmouseup = function() {
     mouseIsPressed = false;
    }

Delete.onclick = function(evt) {
    ctx.clearRect(0, 0, 500, 500);
}


color.onchange = function (evt) {
    ctx.strokeStyle =(evt.target.value);
}