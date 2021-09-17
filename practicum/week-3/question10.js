/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var ans;
    var min = Number.MAX_VALUE
    for (var x of input) {
        for (var y of input) {
            if (Math.abs(x - y) < min && Math.abs(x - y) != 0) {
                ans = []
				var toAdd = [x,y].sort(function(a, b) {
                return a - b;
                })
				ans.push(toAdd)
                min = Math.abs(x - y)
            } else if (Math.abs(x - y) == min && Math.abs(x - y) != 0) {
				var toAdd = [x,y].sort(function(a, b) {
                return a - b;
                })
				ans.push(toAdd)
            }
        }
    }
	ans = ans.slice(0,(ans.length/2))
	return ans.sort(helper);

};

function helper(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {

        return (a[0] < b[0]) ? -1 : 1
    }
}





