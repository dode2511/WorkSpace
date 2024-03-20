// var input = require('fs').readFileSync('/dev/stdin', 'utf8');


var lines = [['2.0 4.0 7.5 8.0'],['1.4']]




let divide = lines.length === 1 ? lines[0].split(" ") : lines[0][0].split(" ");


const n1 = parseFloat(divide[0])
const n2 = parseFloat(divide[1])
const n3 = parseFloat(divide[2])
const n4 = parseFloat(divide[3])

const exame = parseFloat(lines[1])


let media = ((n1*2) + (n2 * 3) + (n3 * 4) +(n4*1)) /10

console.log(`Media: ${media.toFixed(1)}`);

if(media >= 7.0){
    console.log("Aluno aprovado.");
}else if (media >= 5.0 && media <=6.9){
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${exame.toFixed(1)}`);
    let mediaFinal = (media + exame) /2

    if(mediaFinal >= 5.0){
        console.log("Aluno aprovado.");
        console.log(`Media final: ${mediaFinal.toFixed(1)}`);
    }else{
        console.log("Aluno reprovado.");
    }



}else{
    console.log("Aluno reprovado.");
}