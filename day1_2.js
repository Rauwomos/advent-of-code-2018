const fs = require('fs')

// Read the file into an array, split by new line, and convert them to numbers
f = fs.readFileSync('inputs/day1.txt', 'utf-8').split('\n').map(Number)

// Used to test if a frequency has already been reached
freqSet = new Set()

i = 0
freq = 0

// Loop through the input list and breaks when a frequency is first repeated
while(!freqSet.has(freq)) {
	freqSet.add(freq)
	freq += f[i]
	i = (i+1)%f.length
}

console.log(freq)