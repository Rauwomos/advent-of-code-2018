const fs = require('fs')

// Read the file into an array, split by new line
f = fs.readFileSync('inputs/day2.txt', 'utf-8').split('\n')

count2 = 0
count3 = 0

f.forEach(x => {
	letters = {}
	
	// Count occurances of each letter
	for(i in x) {
		if(x[i] in letters)
			letters[x[i]]++
		else
			letters[x[i]] = 1
	}

	// Check if any letter occurs 2 or 3 times
	values = Object.values(letters)
	if(values.indexOf(2) != -1)
		count2++
	if(values.indexOf(3) != -1)
		count3++
})

console.log(count2*count3)