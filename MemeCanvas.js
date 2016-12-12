var canvas = document.getElementById("MC");

var ctx = canvas.getContext("2d");

var img = document.getElementById("Start-Image");

var fileInput = document.getElementById("fileinput");
fileInput.addEventListener('change', imageLoader, false);

var download = document.getElementById('img-download');
download.addEventListener('click', prepareDownload, false);

var text = document.getElementById('custom-text');
text.addEventListener('keyup', doTransform, false);

function prepareDownload() {
    var data = canvas.toDataURL();
    download.href = data;
}




scale = document.getElementById("scale");
scale.addEventListener('change', doTransform, false);

rotate = document.getElementById("rotate");
rotate.addEventListener('change', doTransform, false);




var deviceWidth = window.innerWidth;;
canvas.width = Math.min(600, deviceWidth-20);
canvas.height = Math.min(480, deviceWidth-20);

img.onload = doTransform;

function doTransform() {
    ctx.save();
     x = canvas.width/2 - img.width/2;
     y = canvas.height/2 - img.height/2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width/2, canvas.height/2);
    
    var val = document.getElementById('scale').value;
    ctx.scale(val, val);

    val = document.getElementById('rotate').value;
    ctx.rotate(val*Math.PI/180);

    ctx.translate(-canvas.width/2, -canvas.height/2);

    ctx.drawImage(img, x, y);

    ctx.restore();

    var text = document.getElementById('custom-text').value;
    text = text.toUpperCase();
    x = canvas.width/2;
    y = canvas.height - canvas.height/4.2;
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);

}

function imageLoader() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var reader = new FileReader();
    reader.onload = function(event) {
        img = new Image();
        img.onload = function(){
            doTransform();
        }
        img.src = reader.result;
    }
    reader.readAsDataURL(fileInput.files[0]);
}

ctx.lineWidth =5;
ctx.font = '20pt sanf-serif';
ctx.strokeStyle = 'black';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.lineJoin = 'round';


