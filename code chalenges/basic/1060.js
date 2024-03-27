let lines = ["7",'-5','6','-3.4','4.6','12']

let positvos = 0


for (let i = 0; i < lines.length; i++) {
    if(Number(lines[i]) >= 0) {
        positvos++;
    }
}

console.log(`${positvos} valores positivos`);