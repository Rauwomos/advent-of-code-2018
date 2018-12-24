const fs = require('fs')

// Set the cut to the id. If the cut overlaps, remove it from the set of non_overlapping cuts
function updateFabric(left, top, x, y, fabric, id, non_overlapping_ids) {
	for(let i=left; i<left+x; i++) {
		for(let j=top; j<top+y; j++) {
			if(fabric[j][i] > 0) {
				non_overlapping_ids.delete(fabric[j][i])
				non_overlapping_ids.delete(id)
			}
			fabric[j][i] = id
		}
	}
}

// Read the input file into an array, split by new lines
f = fs.readFileSync('inputs/day3.txt', 'utf-8').split('\n')

// Split the input by spaces, and then split the two inches input into numbers
input = f.map(x=>x.split(' ')).map(x=>[parseInt(x[0].slice(1)), x[1], x[2].substring(0, x[2].length - 1).split(',').map(Number), x[3].split('x').map(Number)])

// Creates 1000x1000 array of 0's
let fabric = new Array(1000).fill(0).map(() => new Array(1000).fill(0));

let res = new Set()

// Parse all of the cuts
for(let i=0; i<input.length; i++) {
	res.add(input[i][0])
	updateFabric(input[i][2][0], input[i][2][1],input[i][3][0],input[i][3][1],fabric, input[i][0], res)
}

console.log(res)