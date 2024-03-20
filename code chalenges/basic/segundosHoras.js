const lines =[556]

const segundos = parseInt(lines[0])


 const horas = segundos / 3600
 const   minutos = (segundos % 3600) / 60
 const   segundosTrue = segundos % 60
 
 
console.log(`${parseInt(horas)}:${parseInt(minutos)}:${parseInt(segundosTrue)}`)