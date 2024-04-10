


var lines = ['0.0 0.0']



let divide  = lines[0].split(' ')



let x = parseFloat(divide[0])

let y = parseFloat(divide[1])





if ( x === 0.0 && y === 0.0){
    console.log('Origem');
}

 if(x=== 0.0 && y !== 0.0){
    console.log('Eixo Y');
}

if (y === 0.0&& x !== 0.0) {
    console.log('Eixo X');
}


if ( x < 0 && y < 0){
    console.log('Q3');
}


if ( x < 0 && y > 0){
    console.log('Q2');
}

if ( x > 0 && y > 0){
    console.log('Q1');
}

if ( x > 0 && y < 0){
    console.log('Q4');
}