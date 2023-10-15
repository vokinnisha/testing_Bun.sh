console.time("bun");

let sum = 0;
for (let i = 0; i < 1_000_000_00; i++) {
    sum += i;
}

console.timeEnd("bun");
