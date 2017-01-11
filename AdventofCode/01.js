var assert = require('assert');

var testInput = 'R2, L3';
var cmds = parse(testInput);


// Check to see if the solve function works as intended.
assert(solve(cmds) === 5);

testInput = 'R2, R2, R2';
cmds = parse(testInput);
assert(solve(cmds) === 2);

var input = "R8, R4, R4, R8,";

cmds = parse(input);
console.log(solve(cmds));

function parse (str) {
    var cmds = str.split(', ')
    cmds = cmds.map(function (cmd) {
        var direction = cmd[0];
        var length = parseInt (cmd.slice(1), 10);
        return { dir: direction, len: length };
    });

    return cmds;
}


function solve (cmds) {
    //var directions = ['N', 'E', 'S', 'W']
    var currentDirection =0;
    var pos = {
        x: 0,
        y: 0
    };

    cmds.forEach(function (cmd) {
        if (cmd.dir === 'R') {
            currentDirection += 1;
        } else {
        currentDirection -= 1;
        }
        if (currentDirection === 4) {
            currentDirection = 0;
        }
        if (currentDirection === -1) {
            currentDirection = 3;
        }

        if (currentDirection === 0) {
            pos.y += cmd.len;
        } else if (currentDirection === 1) {
            pos.x += cmd.len; 
        } else if (currentDirection === 2) {
            pos.y -= cmd.len;
        }
        else {
            pos.x -= cmd.len;
        }
    });
    return Math.abs(pos.x) + Math.abs(pos.y);
}