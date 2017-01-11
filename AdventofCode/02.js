

// Template string blir brukt sånn at vi kan lese code langs flere linjer. 
var testInput = `ULL
RRDDD
LURDL
UUUUD`

//var codes = parse(testInput);
//solve(codes);

var input = `DLRRRRLRLDRRRURRURULRLLULUURRRDDLDULDULLUUDLURLURLLDLUUUDUUUULDRDUUDUDDRRLRDDDUDLDLLRUURDRULUULRLRDULULLRLRLRLDRLUULDLDDDDRRLRUUUDDRURRULLLRURLUURULLRLUDDLDRUULDRURULRRRLLLRDLULDRRDDUDLURURLDULDRDRLDDUURRDUDDRDUURDULDUURDUDRDRULDUDUULRRULUUURDUURUDLDURDLRLURUUDRRDLRUDRULRURLDLLDLLRRDRDRLRRRULDRRLDUURLUUDLUUDDLLRULRDUUDURURLUURDRRRUDLRDULRRRLDRDULRUUDDDLRDUULDRLLDRULUULULRDRUUUULULLRLLLRUURUULRRLDDDRULRRRUDURUR
RULRUUUDLLUDURDRDDLLRLLUDRUDDRLRRDLDLDRDULDLULURDLUDDDUULURLDRUUURURLLRRDDDUUDRLRLLDLDRDDDRDUDLRDRDLLLDDLDUDDRUDUUDLLLLLDULRLURRRLLURUUULUDRLRLRLURRDRLLLRLLULRLLLDDLRLRDLUUUUUDULULDDULLUDUURDLRUDLRUDLRLLRLDLULRLDUDRURURDLRULDLULULDLLDLDLDLLLUDUDDLRLRRDULLUDRDDLLLDUURDULUDURLLLDRUDDDLRLULDLDRRDDDRDULDDUDRDDULLULRRLRUULRDUDURUDULUDUDURLDRDUUDDRRLRURDRRLRDDDDRUDLUDLDDLRDLUUDLRRURDDLURDLRDLLRDRDLDLDUUUURULUULDDDDLDULUURRRULUDLLLDRULDRURL
RRRLRDLLDUURDRRRLURDUULUDURDRRUUDURURRLDLLDRDLRRURDDUDDURLRUUDDULULRUUDRLUUDDLLDDDLRRRDLLLLLLRRURDULDLURRURRDDLDDDUDURRDURRRLUDRRULLRULDRLULRULDDRLLRDLRDUURULURLUURLRRULDULULUULDUDLRLDRDDRRRUUULULDUURLRLLURRLURDUUDDDRUULDLLLDRUURLRRLLDDUDRDLDDDULDRDDDUDRRLLLULURDUDLLUUURRLDULURURDDLUDLLRLDRULULURDLDRLURDLRRDRRUULLULDLURRDDUDRDDDLDUDLDRRUDRULDLDULRLLRRRRDDRLUURRRRDDLLRUURRLRURULDDULRLULRURRUULDUUDURDRRLRLUDRULDRUULUUDRDURDURRLULDDDULDDLRDURRUUUUUDDRRDLRDULUUDDL
DRRLLRRLULDDULRDDLRLDRURDDUDULURRDLUUULURRRLLRLULURLLRLLDLLUDDLLRDRURRDLDDURRURDRDDUDDDLLRLDLDLDDDDRRRRUDUDLRDUDDURLLRURRDUDLRLLUDDRLDUUDDLLLUDRRRLLDDULUDDRLLUDDULLDDLRLDLRURRLUDDLULULDLUURDLLUDUDRRRRDULUDLRRLRUDDUUDRRLLRUUDRRLDDLRRRUDRRDRRDDUDLULLURRUURLLLDRDDLUDDDUDDRURURDLRUULLRDRUUDRDUDRLULLDURUUULDDLDRDRUDRUDUULDDRLRDRRDRRRRLRLRUULDDUUDDLLLLRRRDUDLRDLDUDDUURLUDURLDRRRDRUDUDRLDLRLDRDDLUDRURLRDRDLDUDDDLRLULLUULURLDDDULDUDDDLDRLDLURULLUDLLDRULDLLLDUL
LDULURUULLUDLDDRLLDURRULRLURLLURLRRLRDLDDRUURULLRUURUURRUDDDLRRLDDLULDURLLRDURDLLLURLDRULLURLRLDRDRULURDULDLLDUULLLDUDULDURLUDRULRUUUUUUDUUDDDLLURDLDLRLRDLULRDRULUUDRLULLURLRLDURDRRDUDDDURLLUUDRRURUDLDUDRLRLDRLLLLDLLLURRUDDURLDDRULLRRRRDUULDLUDLDRDUUURLDLLLDLRLRRLDDULLRURRRULDLURLURRRRULUURLLUULRURDURURLRRDULLDULLUDURDUDRLUULULDRRDLLDRDRRULLLDDDRDUDLRDLRDDURRLDUDLLRUDRRRUDRURURRRRDRDDRULRRLLDDRRRLDLULRLRRRUDUDULRDLUDRULRRRRLUULRULRLLRLLURDLUURDULRLDLRLURDUURUULUUDRLLUDRULULULLLLRLDLLLDDDLUULUDLLLDDULRDRULURDLLRRDRLUDRD`;

codes = parse(input)
solve(codes);

solve2(codes);

function parse (str) {
    return str.split('\n').map(function (s) { return s.split('') });
}


function solve(codes) {
    var position = 5;

    for (var code of codes) {
        for (var letter of code) {
            if (letter === 'R') {
                //Right
                if (position !==3 &&
                    position !==6 &&
                    position !==9 ) {
                    position += 1;
                    }
            } else if (letter ==='U') {
                //Up
                if (position !==1 &&
                    position !==2 &&
                    position !==3 ) {
                    position -= 3;
                    }
            } else if (letter ==='L') {    
                //Left
                if (position !==1 &&
                    position !==4 &&
                    position !==7 ) {
                    position -=1; }
            } else {
                if (position !==7 &&
                    position !==8 &&
                    position !==9 ) {
                    position += 3;
                    }
                
            }
        }
        console.log(position);
    }

}

function solve2(codes) {
    var position = 5;
    var solution = '';

    for (var code of codes) {
        for (var letter of code) {
            if (letter === 'R') {
                //Right
                if (IsNot(position, [1, 4, 9, 12, 13])) {
                    position += 1;
                    }
            } else if (letter ==='U') {
                //Up
                if (IsNot(position, [1, 2, 4, 5, 9])) {
                    if (IsNot(position, [3, 13])) {
                        position -= 4;
                    } else {
                        position -= 2 ;
                      }
                    }
            } else if (letter ==='L') {    
                //Left
                if (IsNot(position, [1, 2, 5, 10, 13])) {
                    position -= 1;
                    }
            } else {
                if (IsNot(position, [5, 10, 13, 12, 9])) {
                    if (IsNot(position, [1, 11])) {
                        position += 4;
                    } else {
                        position += 2 ;
                    }
                }
                
            }
        }

        solution += position.toString(16);
    }
   console.log(solution);
}

/**
 * canGo(4,[1, 4, 9, 12, 13])
 * => false
 * 
 * canGo(5,[1, 4, 9, 12, 13])
 * => true
 */


function IsNot (position, not) {
    for (var n of not) {
      if (n === position) {
          return false;
      }
    }
    return true;
}