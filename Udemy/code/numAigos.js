var prompt = require('prompt-sync')();

const range = 5
let soma =0
let arr = []
let c = 1
while (c <= range){
 
    for( let i = 1; i<c; i++){
     if(c%i == 0){
        arr.push(i)

        for(let m = 1 ; m < arr.length;m++){
            soma += arr[m]
            
        }
         console.log(soma,c);   
        }
        
    }
    c++









}