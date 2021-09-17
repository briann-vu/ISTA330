/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var dict = {}
    var helper = []
    for (var x = 1; x <= n; x++) {
        dict[x] = []
        helper.push(x.toString())
    }
	for (var x of helper) {
		var total = 0
		if (x.length > 1) {
			for (var l = 0; l <= x.length - 1; l++) {
				total += parseInt(x[l])
			}
			for (const [key, value] of Object.entries(dict)) {
				if (key == total.toString()) {
					dict[key].push(parseInt(x))
				}
			}
		} else {
			for (const [key, value] of Object.entries(dict)) {
				if (key == x.toString()) {
					dict[key].push(parseInt(x))
				}
			}
		}
	}
	var maxLen = Number.MIN_VALUE
	var count;
	for (const [key, value] of Object.entries(dict)) {
		if (dict[key].length > maxLen) {
			count = 1
			maxLen = dict[key].length
		} else if (dict[key].length == maxLen) {
			count++
		}
	}
	return count
};















