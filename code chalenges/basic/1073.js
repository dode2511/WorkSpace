
let a = 37

let arr = []


for (let i = 1; i <= a; i++) {
    if( i  % 2 === 0) {
        arr.push(i)
    }
}

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}^2 = ${Math.pow(arr[i],2)}`);
}
