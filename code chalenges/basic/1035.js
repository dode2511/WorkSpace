// let 4 valores (a,b,c,d)
// b >c && d >a && c+d > a+b
// c e d positivos 
// a tem q ser par

var lines = ['2 3 -2 6']

const separar = lines[0].split(' ')

let a = parseInt(separar[0])
let b = parseInt(separar[1])
let c = parseInt(separar[2])
let d = parseInt(separar[3])




if(b > c &&  d>a){

    if(c+d > a+b){
        if(c > 0 && d > 0){

            if(a % 2 === 0){
                console.log('Valores aceitos');
            }else{
                console.log('Valores nao aceitos');
            }
        }else{
            console.log('Valores nao aceitos');

        }
    }else{

     console.log('Valores nao aceitos');
    }
}else{
    console.log('Valores nao aceitos');
}
