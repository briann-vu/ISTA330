/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],
        [4,5,6]]

output: [[1,4], 
         [2,5], 
         [3,6]]

*/

var transpose = function(M) {
    var ans = []
    var x = 0
    for (var i = 0; i <= M.length; i++) {
        var helper = []
        for (var m of M) {
            helper.push(m[x])
        }
        x++
        ans.push(helper)
    }
	return ans
    
};
