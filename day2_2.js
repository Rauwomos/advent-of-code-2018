const fs = require('fs')

// Return true if only one of the characters of the two strings is different
// Assumes the strings are equal length
function compare(x, y) {
	count = 0
	for(let i=0; i<x.length; i++) {
		if(x[i] != y[i]) {
			count++
			if(count > 1)
				return false
		}
	}
	if(count)
		return true
	return false
}

// Remove the different character and print the result
// Assumes the strings are equal length
function diff(x, y) {
	for(let i=0; i<x.length; i++) {
		if(x[i] != y[i]) {
			x = x.slice(0,i) + x.slice(i+1)
			break
		}
	}
	console.log(x)
}

// Read the file into an array, split by new line
f = fs.readFileSync('inputs/day2.txt', 'utf-8').split('\n')

for(let i=0; i<f.length; i++) {
	for(let j=i+1; j<f.length; j++) {
		if(compare(f[i], f[j])) {
			diff(f[i], f[j])
			break
		}
	}
}