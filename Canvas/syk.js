var canvas = document.getElementById('Loogi');
var ctx = canvas.getContext('2d');

var space = 1;
var diff = 1;

function tegn () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);


      ctx.beginPath(); 
       for (var i = 0; i < 50; i+=1) {
        ctx.rect(0, 0, i*space, i*space);
    }

   ctx.closePath();
   ctx.stroke();


   space += diff;

   if (space > 500) {
       diff = -1;
   }
   if (space === 0) {
       diff = 1;

   }

}


setInterval(tegn, 20)