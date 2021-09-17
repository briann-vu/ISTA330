/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var dict = {}
    for (var x of input) {
        if (x in dict) {
            dict[x]++
        } else {
            dict[x] = 1
        }
    }

	var maxDInt = -1;
	for (const [key, value] of Object.entries(dict)) {
        if (key == value && key > maxDInt) {
			maxDInt = key
            // using key might be poroblem check and refresh for 6
		}
	}
	return maxDInt
};

console.log(d_integer([3,5,3,3,5,1]))