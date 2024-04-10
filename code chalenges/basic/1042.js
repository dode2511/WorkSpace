var lines = ['7 21 -14']



let divide  = lines[0].split(' ')


let arrayDeNumeros = divide.map(function(str) {
    return parseFloat(str);
});

let arrSort = divide.map(function(str) {
    return parseFloat(str);
});



arrSort.sort(function(a, b) {
    return a - b;
});





let x = false
let y = false


while(x === false && y === false){

    for (let i = 0; i < arrSort.length; i++) {
        console.log(arrSort[i]);
        if (i === arrSort.length - 1) {
             x= true;
            console.log()
        }
    
    }
    if(x === true){
        for (let g = 0; g < arrayDeNumeros.length; g++) {
            console.log(arrayDeNumeros[g]);
            if (g === arrayDeNumeros.length - 1) {
                y= true;
            }
        
        }
    }

}




