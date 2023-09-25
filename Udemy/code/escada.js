var prompt = require('prompt-sync')();

 

const num  = Number(prompt("Numero: "))
const sim  = prompt("Simbolo: ")
const arr = []

for (let c = 0; c < num;c++){

console.log(c);
 if(c == (num -1 )){
   arr.push(sim)
 }else {
    arr.push(" ")
 }
    
 

}
console.log(arr);