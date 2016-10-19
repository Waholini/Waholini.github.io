
var inputElement = document.getElementById("input");

inputElement.oninput = function () {
    var value = parseInt(inputElement.value);

    if (value < 1) {
        value = 1;
    }
    // TODO check that value isn't too large

}

function fib (n) {
    if (n <= 1) {
        return 0;
    }
    
    var first = 0;
    var second = 1;

    var temp = 0;
    
    for (var i = 2; i < n; i += 1) {
         temp = first + second;
         first = second;
         second = temp;

    }

   return second;
}

function foo (x) {
//    return Math.pow(x, 2) - 5 * x + 6;
return x * x - 5 * x + 6;

}