
const lines = [2, 10, 60]

const lines2 = lines.sort()
console.log(lines2);
const a = parseInt(lines2[0])
const b = parseInt(lines2[1])
const c = parseInt(lines2[2])

let maior = 0

if(a > b && a > c){
    maior = a
}

if(b > a && b > c){
    maior = b
}
if(c > a && c > b){
    maior = c
}

console.log(`${maior} eh o maior`)