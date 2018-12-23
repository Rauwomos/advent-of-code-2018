const fs = require('fs')

// Read the file into an array, split by new line
f = fs.readFileSync('inputs/day1.txt', 'utf-8').split('\n')

// Convert each input to a number and sum the array's contents
res = f.map(Number).reduce((a,b) => a + b, 0)

console.log(res)