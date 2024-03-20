//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

let lines = ["10.0 20.1 5.1"]

let divide = lines[0].split(" ")

console.log(divide);
let a = parseFloat(divide[0])
let b = parseFloat(divide[1])
let c = parseFloat(divide[2])

let delta =(Math.pow(b,2) -(4 * a * c))

let r1 = (-b + Math.sqrt(delta)) / (2*a)


let r2 = (-b - Math.sqrt(delta)) / (2*a)


if(delta > 0 && a > 0){
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`);
}else {
    console.log('Impossivel calcular');
}