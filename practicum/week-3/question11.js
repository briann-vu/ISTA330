/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
*/

var d_count = function(input1, input2, d) {
	var count = 0
	for (var x of arr1) {
		for (var y of arr2) {
			console.log(x,'-',y,'=',Math.abs(x-y))
			if (Math.abs(x-y) <= d && Math.abs(x-y) != 0) {
				count++
			}
		}
	}
	return count
};

