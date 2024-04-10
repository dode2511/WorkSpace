var lines = ["2 3"]



let divide  = lines[0].split(" ")


let a = Number(divide[0])
let b = Number(divide[1])




let pagar = 0

switch (a){
    case 1 :
    pagar = 4 * b
    break



    case 2 :
     pagar = 4.50 * b
     break


    case 3 :
        pagar = 5 * b
     break



    case 4 :
        pagar = 2 * b
     break



    case 5 :
        pagar = 1.50 * b
     break


}

console.log(`Total: R$ ${pagar.toFixed(2)}`);