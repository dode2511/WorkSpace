


var lines = ['00.00']


let val = parseFloat(lines[0])

if (val >= 0 && val <= 100) {
    if(val >= 0 && val <= 25){
        console.log('Intervalo [0,25]');
    }else if (val > 25 && val <= 50){
        console.log('Intervalo (25,50]');
    }else if (val > 50 && val <= 75){
        console.log('Intervalo (50,75]');
    }else if (val > 75 && val <= 100){
        console.log('Intervalo (75,100]')
    }

} else {
    console.log('Fora de intervalo');
}