
var lines = [30]



const temp = parseInt(lines[0])


 const anos = temp / 365
 const   meses = (temp % 365) / 30
 const   dias = (temp % 365) % 30
 
 
 
console.log(`${parseInt(anos)}:${parseInt(meses)}:${parseInt(dias)}`)