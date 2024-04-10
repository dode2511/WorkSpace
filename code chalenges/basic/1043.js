var lines = ['6.0 4.0 2.0']


let numeros = lines[0].split(' ').map(parseFloat);





 const a =numeros[0]

 const b =numeros[1]

 const c =numeros[2]



 


 function calcularTrianguloOuTrapezio(A, B, C) {
    if (A + B > C && A + C > B && B + C > A) {
        // Se os lados formam um triângulo
        let perimetro = A + B + C;
        console.log("Perimetro =", perimetro.toFixed(1));
    } else {
        // Se os lados não formam um triângulo
        let area = ((A + B) * C) / 2;
        console.log("Area =", area.toFixed(1));
    }
}

calcularTrianguloOuTrapezio(a, b, c);
