const fs = require('fs')

// Increase the fabric values be 1 where the cut is located
function updateFabric(left, top, x, y, fabric) {
	for(let i=left; i<left+x; i++) {
		for(let j=top; j<top+y; j++) {
			fabric[j][i]++
		}
	}
}

// Read the input file into an array, split by new lines
f = fs.readFileSync('inputs/day3.txt', 'utf-8').split('\n')

// Split the input by spaces, and then split the two inches input into numbers
input = f.map(x=>x.split(' ')).map(x=>[x[0], x[1], x[2].substring(0, x[2].length - 1).split(',').map(Number), x[3].split('x').map(Number)])

// Creates 1000x1000 array of 0's
let fabric = new Array(1000).fill(0).map(() => new Array(1000).fill(0));

// Parse all of the cuts
for(let i=0; i<input.length; i++) {
	updateFabric(input[i][2][0], input[i][2][1],input[i][3][0],input[i][3][1],fabric)
}

// Count the overlapping cuts
let overlap = 0
for(let i=0; i<fabric.length; i++) {
	for(let j=0; j<fabric.length; j++) {
		if(fabric[j][i] > 1)
			overlap++
	}
}
console.log(overlap)